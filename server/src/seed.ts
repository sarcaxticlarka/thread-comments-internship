import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  const comment1 = await prisma.comment.create({
    data: {
      text: 'This is a great discussion topic! I love how threaded comments work.',
      author: 'Alice',
      timestamp: new Date().toLocaleString(),
      likes: 5,
    },
  })

  const comment2 = await prisma.comment.create({
    data: {
      text: 'I agree! The nested structure makes conversations much easier to follow.',
      author: 'Bob',
      timestamp: new Date().toLocaleString(),
      likes: 3,
      parentId: comment1.id,
    },
  })

  const comment3 = await prisma.comment.create({
    data: {
      text: 'Absolutely! And the lazy loading feature is really nice for performance.',
      author: 'Charlie',
      timestamp: new Date().toLocaleString(),
      likes: 2,
      parentId: comment2.id,
    },
  })

  const comment4 = await prisma.comment.create({
    data: {
      text: 'Welcome to our discussion forum! Feel free to share your thoughts.',
      author: 'Admin',
      timestamp: new Date().toLocaleString(),
      likes: 8,
    },
  })

  const comment5 = await prisma.comment.create({
    data: {
      text: 'Thanks for setting this up! The authentication system works great.',
      author: 'Diana',
      timestamp: new Date().toLocaleString(),
      likes: 4,
      parentId: comment4.id,
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log(`Created ${await prisma.comment.count()} comments`)
}

main()
  .finally(async () => {
    await prisma.$disconnect()
  })