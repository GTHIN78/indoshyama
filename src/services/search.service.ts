
import { SearchResult } from "@/types/search";

export async function searchArticles(
  query: string
): Promise<SearchResult[]> {

  if (!query.trim()) return [];

  // Future API

  // return fetch("/api/search")

  return [];
}
