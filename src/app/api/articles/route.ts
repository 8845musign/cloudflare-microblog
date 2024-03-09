import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export type Article = {
  id: string;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};

export async function GET() {
  const db = getRequestContext().env.DB;

  const { results } = await db
    .prepare(
      "SELECT id, title, body, created_at, updated_at FROM articles ORDER BY created_at DESC"
    )
    .all<Article>();
  const articles = results;
  console.log(articles);

  return new Response("Hello World");
}
