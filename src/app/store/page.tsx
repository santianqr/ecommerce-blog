import { api } from "~/trpc/server";
import { unstable_noStore as noStore } from "next/cache";

export default async function Store() {
  noStore();
  return (
    <main>
      STORE
      <Comp />
    </main>
  );
}

async function Comp() {
  const categories = await api.article.getCategories.query();
  return (
    <div>
      {categories.map((category, index) => (
        <p key={index}>{category.category_one}</p>
      ))}
    </div>
  );
}
