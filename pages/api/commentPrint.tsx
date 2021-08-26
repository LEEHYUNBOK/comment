import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const users = await prisma.comments.findMany({
    where: { postId: 1 },
    include: { Users: true },
  })

  res.json(users)
}
