import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();
  const categories = await api.article.getCategories.query();
  return (
    <main className="">
      INICIO
      {JSON.stringify(categories)}
      {categories.map((category, index) => (
        <p key={index}>{category.category_one}</p>
      ))}
    </main>
  );
}
