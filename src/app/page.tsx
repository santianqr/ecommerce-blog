import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  {
    /*const session = await getServerAuthSession();*/
  }

  return (
    <main className="">
      INICIO
    </main>
  );
}
