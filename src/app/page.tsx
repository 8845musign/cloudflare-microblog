import { Article } from "@/types";
import type { NextPage, GetServerSideProps } from "next";
import { Button } from "@/components/ui/button";

import { axios } from "@/lib/axios";

const Home: NextPage = async () => {
  const data = await axios.get("/api/articles");
  const allArticles = (await data.data) as Article[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allArticles.map((article) => (
        <article key={article.id} className="mb-8">
          <h2 className="text-2xl font-bold">{article.title}</h2>
          <p>{article.body}</p>
        </article>
      ))}
      <Button>ボタン</Button>
    </main>
  );
};

export default Home;
