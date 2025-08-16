import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <>
                <svg
                    className="rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="28"
                    height="28"
                    viewBox="0 0 48 48">
                    <image
                        xlinkHref="data:image/png;base64,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"
                        x="0"
                        y="0"
                        width="48"
                        height="48"
                    />
                </svg>
                Charm Bracelet
            </>
        ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
};
