import { Article } from "@/types";
import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { axios } from "@/lib/axios";

const Home: NextPage = async () => {
  const data = await axios.get("/api/articles");
  const allArticles = (await data.data) as Article[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/login">ログイン</Link>
      {allArticles.map((article) => (
        <article key={article.id} className="mb-8">
          <h2 className="text-2xl font-bold">
            <Link href={`/articles/${article.id}`}>{article.title}</Link>
          </h2>
        </article>
      ))}
      <Button>ボタン</Button>
    </main>
  );
};

export default Home;
