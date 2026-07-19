import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

import type { Article } from "@/types/article";

interface HeroCardProps {
  article: Article;
  priority?: boolean;
}

export default function HeroCard({
  article,
  priority = false,
}: HeroCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <Link href={`/article/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority={priority}
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            {article.category}
          </span>
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <Link href={`/article/${article.slug}`}>
          <h2 className="line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
            {article.title}
          </h2>
        </Link>

        <p className="line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {article.summary}
        </p>

        <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
          <div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {article.author}
            </p>

            <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
              <Clock size={14} />
              <span>{article.publishedAt}</span>
            </div>
          </div>

          <Link
            href={`/article/${article.slug}`}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Read
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
