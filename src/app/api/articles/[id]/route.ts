import { getRequestContext } from "@cloudflare/next-on-pages";
import { Article } from "@/types";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const { id } = params;

  const db = getRequestContext().env.DB;

  const data = await db
    .prepare(
      "SELECT id, title, body, created_at, updated_at FROM articles WHERE id = ?"
    )
    .bind(id)
    .first<Article>();

  return NextResponse.json(data);
}
