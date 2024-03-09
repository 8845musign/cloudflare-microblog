import { Article } from "@/types";
import { axios } from "@/lib/axios";

const Page = async ({ params }: { params: { id: string } }) => {
  const result = await axios.get<Article>(`/api/articles/${params.id}`);

  return (
    <main className="p-24">
      <h1>{result.data.title}</h1>
      <p>{result.data.body}</p>
    </main>
  );
};

export default Page;
