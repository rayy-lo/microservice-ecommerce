import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const product = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Feline Fortress",
      price: 50.99,
      url: "/feline-fortress",
      handle: "feline-fortress",
    },
  });
  const collection = await prisma.collection.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Homepage Products",
      url: "/homepage-products",
      handle: "homepage-products",
      products: {
        create: [
          {
            name: "Feline Temple",
            price: 20.99,
            url: "/feline-temple",
            handle: "feline-temple",
          },
        ],
      },
    },
  });
  console.log({ product, collection });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
