import { postRouter } from "./routers/post"
import { createTRPCRouter, publicProcedure } from "./trpc"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  healthCheck: publicProcedure.query(() => "api is health!"),
  post: postRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
