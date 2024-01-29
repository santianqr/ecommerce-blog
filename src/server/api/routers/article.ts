import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const articleRouter = createTRPCRouter({
  getCategories: protectedProcedure.query(() => {
    return db.article.findMany({
      select: {
        category_one: true,
      },
      distinct: ["category_one"],
    });
  }),
});
