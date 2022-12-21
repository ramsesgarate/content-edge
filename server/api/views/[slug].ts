import { getPost, upsertPost } from "~/server/database/views";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    const method = getMethod(event);
    const params = getRouterParams(event);
    const slug = z.string().parse(params.slug);

    switch (method) {
      case "GET":
        try {
          let post = await getPost(slug);

          return {
            views: post?.views || 1,
            slug,
          };
        } catch (error: any) {
          throw createError({
            statusCode: 500,
            statusMessage: error.message,
          });
        }

      case "POST":
        try {
          let createdPost = await upsertPost(slug);

          return {
            views: createdPost?.views || 1,
          };
        } catch (error: any) {
          throw createError({
            statusCode: 500,
            statusMessage: error.message,
          });
        }
      default:
        setHeader(event, "Allow", ["GET", "POST"]);

        throw createError({
          statusCode: 405,
          statusMessage: "Method Not Allowed",
        });
    }
  } catch (e: any) {
    throw createError({
      statusCode: 500,
      statusMessage: e.message,
    });
  }
});
