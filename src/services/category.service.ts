import { articles } from "@/data/articles";
import type { Article } from "@/types/article";

export async function getArticlesByCategory(
  slug: string
): Promise<Article[]> {
  return articles.filter(
    (article) => article.category.slug === slug
  );
}

export async function getCategory(slug: string) {
  const article = articles.find(
    (item) => item.category.slug === slug
  );

  return article?.category ?? null;
}
