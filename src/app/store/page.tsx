import { api } from "~/trpc/server";
import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";

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
  const session = await getServerAuthSession();
  if (!session?.user) return null;
  const categories = await api.article.getCategories.query();
  return (
    <div>
      {categories.map((category, index) => (
        <p key={index}>{category.category_one}</p>
      ))}
    </div>
  );
}
