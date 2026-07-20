import Image from "next/image";

import type { Article } from "@/types/article";

import ArticleHeader from "./ArticleHeader";
import ArticleMeta from "./ArticleMeta";
import ArticleBody from "./ArticleBody";
import TableOfContents from "./TableOfContents";

interface Props {
  article: Article;
}

export default function ArticleContent({
  article,
}: Props) {
  return (
    <article
      itemScope
      itemType="https://schema.org/NewsArticle"
      className="mx-auto max-w-4xl"
    >
      <ArticleHeader article={article} />

      <ArticleMeta article={article} />

      <figure className="relative mt-8 overflow-hidden rounded-2xl">
        <Image
          src={article.featuredImage}
          alt={article.imageAlt}
          width={1200}
          height={675}
          priority
          className="h-auto w-full object-cover"
        />

        <figcaption className="mt-2 text-sm text-slate-500">
          {article.imageAlt}
        </figcaption>
      </figure>

      <TableOfContents />

      <ArticleBody article={article} />

      <div className="my-10 rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700">
        Advertisement Placeholder (728 × 90)
      </div>
    </article>
  );
}
