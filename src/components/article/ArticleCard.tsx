import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  CalendarDays,
  Clock3,
  Eye,
  Share2,
} from "lucide-react";

import type { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
  priority?: boolean;
  compact?: boolean;
  showSummary?: boolean;
  showActions?: boolean;
}

export default function ArticleCard({
  article,
  priority = false,
  compact = false,
  showSummary = true,
  showActions = true,
}: ArticleCardProps) {
  return (
    <article
      itemScope
      itemType="https://schema.org/NewsArticle"
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      <Link href={`/article/${article.slug}`}>
        <div
          className={`relative overflow-hidden ${
            compact ? "aspect-[4/3]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={article.featuredImage}
            alt={article.imageAlt}
            fill
            priority={priority}
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            itemProp="image"
          />

          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{
              background: article.category.color || "#2563eb",
            }}
          >
            {article.category.name}
          </span>
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <Link href={`/article/${article.slug}`}>
          <h2
            itemProp="headline"
            className="line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white"
          >
            {article.title}
          </h2>
        </Link>

        {showSummary && (
          <p
            itemProp="description"
            className="line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
          >
            {article.excerpt}
          </p>
        )}

        <div className="flex items-center gap-3">
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            width={36}
            height={36}
            className="rounded-full"
          />

          <div>
            <p
              itemProp="author"
              className="text-sm font-semibold"
            >
              {article.author.name}
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <CalendarDays size={13} />
                {article.publishedAt}
              </span>

              <span className="flex items-center gap-1">
                <Clock3 size={13} />
                {article.readingTime} min
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Eye size={16} />
            {article.views.toLocaleString()}
          </div>

          {showActions && (
            <div className="flex gap-2">
              <button
                aria-label="Bookmark article"
                className="rounded-lg border p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <Bookmark size={18} />
              </button>

              <button
                aria-label="Share article"
                className="rounded-lg border p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <Share2 size={18} />
              </button>
            </div>
          )}
        </div>

        <meta itemProp="datePublished" content={article.publishedAt} />
        {article.updatedAt && (
          <meta itemProp="dateModified" content={article.updatedAt} />
        )}
      </div>
    </article>
  );
}
