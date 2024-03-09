import { getRequestContext } from "@cloudflare/next-on-pages";
import { Article } from "@/types";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const db = getRequestContext().env.DB;

  const { results } = await db
    .prepare(
      "SELECT id, title, body, created_at, updated_at FROM articles ORDER BY created_at DESC"
    )
    .all<Article>();
  const articles = results;

  return NextResponse.json(articles);
}
