import { notFound } from "next/navigation";

import CategoryHeader from "@/components/category/CategoryHeader";
import CategoryArticleList from "@/components/category/CategoryArticleList";

import {
  getArticlesByCategory,
  getCategory,
} from "@/services/category.service";

interface Props {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({
  params,
}: Props) {

  const category = await getCategory(params.slug);

  if (!category) {
    notFound();
  }

  const articles =
    await getArticlesByCategory(params.slug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">

      <CategoryHeader
        category={category}
      />

      <CategoryArticleList
        articles={articles}
      />

    </main>
  );
}
