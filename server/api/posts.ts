import prisma from "~/server/database/client";

export default defineEventHandler(async (event) => {
  const method = getMethod(event);

  if (method === 'GET') {
    try {
      const users = await prisma.post.findMany({
        include: { author: true },
      })
      return {users}
    } catch (error) {
      console.error(error)
      throw createError({
        statusCode: 500,
      });
    }
  } else if (method === 'POST') {
    const { title, content, authorEmail } = await useBody(event);
    try {
      const createdPost = await prisma.post.create({
        data: {
          title,
          content,
          author: {
            connect: {
              email: authorEmail,
            },
          },
        },
      })
      return createdPost
    } catch (e) {
      console.error(e)
      throw createError({
        statusCode: 500,
      });
    }
  } else {
    throw createError({
      statusCode: 404,
    });
  }
})
