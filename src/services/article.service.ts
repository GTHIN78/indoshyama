import { articles } from "@/data/articles";
import type { Article } from "@/types/article";

export async function getAllArticles(): Promise<Article[]> {
  return articles;
}

export async function getArticleBySlug(
  slug: string
): Promise<Article | null> {
  return (
    articles.find((article) => article.slug === slug) ?? null
  );
}

export async function getRelatedArticles(
  article: Article,
  limit = 4
): Promise<Article[]> {
  return articles
    .filter(
      (item) =>
        item.id !== article.id &&
        item.category.slug === article.category.slug
    )
    .slice(0, limit);
}
