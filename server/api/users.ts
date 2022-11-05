import { Prisma } from "@prisma/client";
import prisma from "~/server/database/client";

export default defineEventHandler(async (event) => {
  const method = getMethod(event);
  if (method === "GET") {
    try {
      const users = await prisma.user.findMany({
        include: { profiles: true },
      });
      return { users };
    } catch (error) {
      console.error(error);
      throw createError({
        statusCode: 500,
        statusMessage: error,
      });
    }
  } else if (method === "POST") {
    try {
      const body = await useBody(event);
      const createdUser = await prisma.user.create({
        data: body,
      });
      return createdUser;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          throw createError({
            statusCode: 409,
            statusMessage: "A user with this email already exists",
          });
        }
      }
      console.error(e);
      throw createError({
        statusCode: 500,
      });
    }
  } else {
    throw createError({
      statusCode: 404,
    });
  }
});
