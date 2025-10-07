import Image from "next/image";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations("IndexPage");
  const l = useTranslations("PageLayout");
  const c = useTranslations("ExamplePage");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center sm:items-start">
        <Image
          className="dark:invert mx-auto"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-center mx-auto">{t("title")}</h1>
        <p>{t("description")}</p>
        <div className="flex flex-col justify-center items-center my-4 mx-auto">
          <h2 className="text-xl">{c("title")}</h2>
          <blockquote className="font-sans border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-4 mx-4 md:mx-10 max-w-md">
            <p className="text-xl/8 text-center font-medium tracking-wide leading-8">
              {c("content")}
            </p>
            <cite className="block text-right mt-4 text-gray-600">
              - Jorge Luis Borges
            </cite>
          </blockquote>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mx-auto">
          <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
              {l("links.docs.description")}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                {l("links.docs.title")}
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              {l("links.source.description")}
            </li>
          </ol>

          <div className="flex gap-4 justify-center items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center my-2 p-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
