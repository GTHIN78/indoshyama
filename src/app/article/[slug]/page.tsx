import { notFound } from "next/navigation";

import ArticleContent from "@/components/article/ArticleContent";
import Breadcrumb from "@/components/article/Breadcrumb";
import RelatedArticles from "@/components/article/RelatedArticles";

import {
  getArticleBySlug,
  getRelatedArticles,
} from "@/services/article.service";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({
  params,
}: PageProps) {

  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const related = await getRelatedArticles(article);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">

      <Breadcrumb article={article} />

      <ArticleContent article={article} />

      <RelatedArticles articles={related} />

    </main>
  );
}
