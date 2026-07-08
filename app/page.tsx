import AmazonButton from "@/components/analytics/AmazonButton"
import {
  editorialAuthors
} from "@/lib/editorial/authors/selector"

import AuthorCard from "@/components/authors/AuthorCard"

export default function HomePage() {

  return (

    <main
      className="
        relative
        min-h-screen
        bg-[#050505]
        text-[#f6f1e8]
        overflow-hidden
      "
    >

      <section
        className="
          relative
          border-b
          border-white/[0.06]
          overflow-hidden
        "
      >

        <div className="absolute inset-0">

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              opacity-[0.10]
              scale-105
              blur-[1px]
            "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2000&auto=format&fit=crop')"
            }}
          />

          <div className="absolute inset-0 bg-black/78" />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_0%,#050505_78%)]
            "
          />

        </div>

        <div
          className="
            relative
            max-w-[1700px]
            mx-auto
            px-8
            md:px-16
            xl:px-[120px]
            pt-24
            pb-40
          "
        >

          <div className="max-w-[920px]">

            <div className="mb-8">

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.36em]
                  text-[#8f7a58]
                "
              >
                Quiet Literary Fiction
              </span>

            </div>

            <h1
              className="
                font-serif
                leading-[0.9]
                tracking-[-0.06em]
                text-[clamp(4rem,8vw,7rem)]
                max-w-[7ch]
                text-[#f8f4ee]
              "
            >
              Stories for
              people who
              feel deeply
              in silence.
            </h1>

            <div className="mt-14 max-w-[560px]">

              <p
                className="
                  text-[19px]
                  leading-[2.05]
                  text-[#b8ada1]
                  font-light
                  tracking-[0.01em]
                "
              >
                Quiet literary fiction about intimacy,
                loneliness and the invisible architecture
                of human emotion.
              </p>

            </div>

            <div
              className="
                mt-16
                pt-10
                border-t
                border-white/[0.08]
                max-w-[680px]
              "
            >

              <div
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.34em]
                  text-[#8f7a58]
                  mb-4
                "
              >
                Current Release
              </div>

              <h2
                className="
                  font-serif
                  text-[clamp(2rem,3vw,2.8rem)]
                  leading-[1.05]
                  text-[#f5efe6]
                  mb-2
                "
              >
                Everything Tender Eventually Breaks
              </h2>

              <p
                className="
                  text-[#9b8f81]
                  mb-8
                "
              >
                Lena Voss
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-4
                "
              >

                <a
                  href="/books/everything-tender-eventually-breaks/read"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-7
                    py-3
                    border
                    border-[#8f7a58]
                    text-[#f5efe6]
                  "
                >
                  Read Sample
                </a>

                <AmazonButton
                  book="everything-tender-eventually-breaks"
                  format="kindle"
                  source="home"
                  url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena-ebook/dp/B0H73C3T26?ref_=ast_author_mpb"
                >
                  Read on Kindle
                </AmazonButton>

                <AmazonButton
                  book="everything-tender-eventually-breaks"
                  format="paperback"
                  source="home"
                  url="https://www.amazon.com/Everything-Tender-Eventually-Breaks-Lena/dp/B0H73RN4K3/ref=tmm_pap_swatch_0"
                >
                  Buy Paperback
                </AmazonButton>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section
        className="
          max-w-[1600px]
          mx-auto
          px-8
          md:px-16
          xl:px-[72px]
          py-32
        "
      >

        <div
          className="
            mb-28
            grid
            lg:grid-cols-2
            gap-24
            border-b
            border-white/[0.04]
            pb-14
          "
        >

          <div>

            <div
              className="
                mb-6
                text-[10px]
                uppercase
                tracking-[0.38em]
                text-[#8f7a58]
              "
            >
              Authors
            </div>

            <h2
              className="
                font-serif
                text-[clamp(3.2rem,5vw,5.6rem)]
                leading-[0.95]
                tracking-[-0.045em]
                text-[#f5efe6]
                max-w-[12ch]
              "
            >
              Distinct perspectives on love, loss,
              identity, obsession and the quiet
              complexities of being human.
            </h2>

          </div>

          <div className="flex items-end">

            <p
              className="
                max-w-[520px]
                text-[20px]
                leading-[2]
                text-[#7e7468]
              "
            >
              Each Obsidian House author explores
              a different emotional territory —
              from intimacy and nostalgia to
              obsession, uncertainty and
              existential doubt.
            </p>

          </div>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-24
          "
        >

          {editorialAuthors.map((author) => (

            <AuthorCard
              key={author.id}
              author={author}
            />

          ))}

        </div>

      </section>

    </main>

  )

}