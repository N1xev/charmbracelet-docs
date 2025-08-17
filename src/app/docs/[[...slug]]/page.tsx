import { source } from "@/lib/source";
import {
    DocsPage,
    DocsBody,
    DocsDescription,
    DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { LLMCopyButton, ViewOptions } from "@/components/ai/page-actions";
import { Rate } from "@/components/rate";
// import { onRateAction } from "@/components/githubRate";
import {AISearchTrigger} from '@/components/ai/index'

import { App, Octokit } from "octokit";
import type { ActionResponse, Feedback } from "@/components/rate";

const repo = "charmbracelet-docs";
const owner = "N1xev";
const DocsCategory = "Docs Feedback";

let instance: Octokit | undefined;

async function getOctokit(): Promise<Octokit> {
    if (instance) return instance;
    const appId = process.env.GITHUB_APP_ID;
    const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;

    if (!appId || !privateKey) {
        throw new Error(
            "No GitHub keys provided for Github app, docs feedback feature will not work."
        );
    }

    const app = new App({
        appId,
        privateKey,
    });

    const { data } = await app.octokit.request(
        "GET /repos/{owner}/{repo}/installation",
        {
            owner,
            repo,
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
            },
        }
    );

    instance = await app.getInstallationOctokit(data.id);
    return instance;
}

interface RepositoryInfo {
    id: string;
    discussionCategories: {
        nodes: {
            id: string;
            name: string;
        }[];
    };
}

let cachedDestination: RepositoryInfo | undefined;
async function getFeedbackDestination() {
    if (cachedDestination) return cachedDestination;
    const octokit = await getOctokit();

    const {
        repository,
    }: {
        repository: RepositoryInfo;
    } = await octokit.graphql(`
    query {
      repository(owner: "${owner}", name: "${repo}") {
        id
        discussionCategories(first: 25) {
          nodes { id name }
        }
      }
    }
  `);

    return (cachedDestination = repository);
}

 async function onRateAction(
    url: string,
    feedback: Feedback
): Promise<ActionResponse> {
    "use server";
    const octokit = await getOctokit();

    const destination = await getFeedbackDestination();
    if (!octokit || !destination)
        throw new Error("GitHub comment integration is not configured.");

    const category = destination.discussionCategories.nodes.find(
        (category) => category.name === DocsCategory
    );

    if (!category)
        throw new Error(
            `Please create a "${DocsCategory}" category in GitHub Discussion`
        );

    const title = `Feedback for ${url}`;
    const body = `[${feedback.opinion}] ${feedback.message}\n\n> Forwarded from user feedback.`;

    let {
        search: {
            nodes: [discussion],
        },
    }: {
        search: {
            nodes: { id: string; url: string }[];
        };
    } = await octokit.graphql(`
    query {
      search(type: DISCUSSION, query: ${JSON.stringify(
          `${title} in:title repo:${owner}/${repo} author:@me`
      )}, first: 1) {
        nodes {
          ... on Discussion { id, url }
        }
      }
    }`);

    if (discussion) {
        await octokit.graphql(`
      mutation {
        addDiscussionComment(input: { body: ${JSON.stringify(
            body
        )}, discussionId: "${discussion.id}" }) {
          comment { id }
        }
      }`);
    } else {
        const result: {
            discussion: { id: string; url: string };
        } = await octokit.graphql(`
      mutation {
        createDiscussion(input: { repositoryId: "${
            destination.id
        }", categoryId: "${category!.id}", body: ${JSON.stringify(
            body
        )}, title: ${JSON.stringify(title)} }) {
          discussion { id, url }
        }
      }`);

        discussion = result.discussion;
    }

    return {
        githubUrl: discussion.url,
    };
}

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const MDXContent = page.data.body;

    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
                <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
                <ViewOptions
                    markdownUrl={`${page.url}.mdx`}
                    githubUrl={`https://github.com/N1xev/charmbracelet-docs/tree/main/content/docs/${page.path}`}
                />
                <AISearchTrigger className="border hover:bg-fd-accent hover:text-fd-accent-foreground bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80 inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none "/>
            </div>
            <DocsBody>
                <MDXContent
                    components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLink(source, page),
                    })}
                />
            </DocsBody>
            <Rate
                onRateAction={async (url, feedback) => {
                    "use server";
                    return await onRateAction(url, feedback);
                }}
            />
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    return {
        title: `Charm - ${page.data.title}`,
        description: page.data.description,
    };
}
