import { Post } from "@prisma/client";
import prisma from "~/server/database/client";

export async function upsertPost(slug: string): Promise<Post> {
  return await prisma.post.upsert({
    where: { slug },
    create: { slug, views: 1 },
    update: { views: { increment: 1 } },
  });
}
