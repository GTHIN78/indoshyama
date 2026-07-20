import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  CalendarDays,
  Clock3,
  Share2,
} from "lucide-react";

import type { Article } from "@/types/article";

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({
  article,
}: FeaturedArticleProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">

      <div className="grid lg:grid-cols-2">

        {/* Image */}

        <div className="relative min-h-[320px] lg:min-h-[520px]">

          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />

          <span className="absolute left-6 top-6 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">

            Featured

          </span>

        </div>

        {/* Content */}

        <div className="flex flex-col justify-center p-8 lg:p-12">

          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">

            {article.category}

          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">

            {article.title}

          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">

            {article.summary}

          </p>

          {/* Meta */}

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              {article.publishedAt}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              5 min read
            </div>

            <div>
              By <strong>{article.author}</strong>
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href={`/article/${article.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Read Full Story

              <ArrowRight size={18} />

            </Link>

            <button
              className="rounded-xl border border-slate-300 p-3 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              aria-label="Bookmark article"
            >
              <Bookmark size={20} />
            </button>

            <button
              className="rounded-xl border border-slate-300 p-3 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              aria-label="Share article"
            >
              <Share2 size={20} />
            </button>

          </div>

        </div>

      </div>

    </article>
  );
}
