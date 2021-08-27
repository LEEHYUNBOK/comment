import prisma from '../../../lib/prisma'

export default async function InComment(req, res) {
  const { id } = req.query

  const users = await prisma.commentsIn.findMany({
    where: { commentsId: Number(id) },
    include: { commentUsers: true },
  })

  res.json(users)
}
