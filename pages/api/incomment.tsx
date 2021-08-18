import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const { id } = req.query

  const users = await prisma.inComments.findMany({
    where: { commentsId: Number(id) },
    include: { user: true },
  })

  res.json(users)
}
