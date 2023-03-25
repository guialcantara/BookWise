import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      image: string
      id: string
      created_at: string
      name: string
    }& DefaultSession["user"]
  }
}