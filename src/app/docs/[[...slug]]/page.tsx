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
import { onRateAction } from "@/components/githubRate";
// import {AISearchTrigger} from '@/components/ai/index'

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
                    githubUrl={`https://github.com/Nixev/charm-wiki/content/docs/${page.path}`}
                />
                {/* <AISearchTrigger className=" h-4 w-14 bg-blue-400"/> */}
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
