//practice script to test prisma

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
// const newLink = await prisma.link.create({
//     data: {
//           description: 'this is the description',
//           url: 'www.demo.com',
//     },
// })
  const updateLink = await prisma.link.update({
    where: {
      id: 2,
    },
    data: {
      description: 'Viola the Magnificent',
    },
  })
  
  const allLinks = await prisma.link.findMany()
  console.log(allLinks)

}

main()
  .catch(e => {
    throw e
  })

  .finally(async () => {
    await prisma.$disconnect()
  })