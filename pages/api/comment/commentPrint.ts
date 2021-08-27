import prisma from '../../../lib/prisma'

export default async function CommentPrint(req, res) {
  const users = await prisma.comments.findMany({
    where: { postId: 1 },
    include: { commentUsers: true },
  })

  res.json(users)
}