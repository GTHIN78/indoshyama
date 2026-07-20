import type { Article } from "@/types/article";
import ArticleCard from "./ArticleCard";

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

export default function RelatedArticles({
  articles,
  title = "You May Also Like",
}: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section
      className="mt-16"
      aria-labelledby="related-articles-heading"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2
          id="related-articles-heading"
          className="text-3xl font-bold text-slate-900 dark:text-white"
        >
          {title}
        </h2>

        <span className="text-sm text-slate-500">
          {articles.length} Articles
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            compact
            showSummary={false}
          />
        ))}
      </div>
    </section>
  );
}
