import { PrismaClient } from "@prisma/client";

//dirty hack for hot reload in development to avoid to many instance of prisma
declare global {
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalThis.prisma = db