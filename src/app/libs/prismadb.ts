import {PrismaClient} from '@prisma/client'

declare global{
    var prisma: PrismaClient | undefined
}
const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client  // because hotReloding of the nextjs can cause the number of prisma clients so we assign the client to the global variable which is not affected by the hot reloading.

export default client; 
