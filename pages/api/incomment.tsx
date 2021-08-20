import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const { id } = req.body

  const users = await prisma.inComments.findMany({
    where: { commentsId: id },
    include: { user: true },
  })

  res.json(users)
}
