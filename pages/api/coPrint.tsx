import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const users = await prisma.comments.findMany({
    include: { user: true },
  })
  res.json(users)
}
