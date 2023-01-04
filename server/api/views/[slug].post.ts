import { getPost, upsertPost } from "~/server/database/views";
import { z } from "zod";
import { Post } from "@prisma/client";


export default defineEventHandler(async (event) => {
  const params = getRouterParams(event);
  const slug = z.string().parse(params.slug);

  let post: Post = await upsertPost(slug);

  return post?.views || 1;
});
