import { api } from "~/trpc/server";

export default async function Store() {
  const categories = await api.article.getCategories.query();
  return (
    <main>
      STORE
      {categories.map((category, index) => (
        <p key={index}>{category.category_one}</p>
      ))}
    </main>
  );
}
