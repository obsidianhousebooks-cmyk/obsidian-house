export interface EditorialBook {

    id: string

    title: string

    slug: string

    author: string

    authorSlug: string

    description: string

    category: string

    cover: string

    amazonUrl?: string

}

export const editorialBooks: EditorialBook[] = [

    {

        id:
            "lena-voss-001",

        title:
            "Everything Tender Eventually Breaks",

        slug:
            "everything-tender-eventually-breaks",

        author:
            "Lena Voss",

        authorSlug:
            "lena-voss",

        description:
            "A restrained psychological literary novel about emotional dependency, urban loneliness and invisible emotional violence.",

        category:
            "Psychological Literary Fiction",

        cover:
            "/covers/lena-cover.jpg",

        amazonUrl:
            "https://amazon.com"

    }

]