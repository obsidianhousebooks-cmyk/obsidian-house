import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://obsidian-house-zeta.vercel.app";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/authors`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/books`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/journal`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/authors/lena-voss`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/authors/elias-moreau`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/authors/clara-vale`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/authors/adrian-veil`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/authors/noa-arden`,
            lastModified: new Date(),
        },
    ];
}