import prisma from '../../../lib/prisma'

export default async function commentFunction(req, res) {
  const { name, content, postId, password, commentId, ty } = req.body

  switch (ty) {
    case 'like':
    default:
      return
  }
  const users = await prisma.comments.findMany({
    where: { postId: 1 },
    include: { commentUsers: true },
  })

  res.json(users)
}
