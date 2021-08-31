import prisma from '../lib/prisma'

export default async function CommentPrint(req, res) {
  const { postId } = req.query
  const users = await prisma.comments.findMany({
    // where: { postId: postId },
    include: { commentUsers: true },
  })

  res.json(users)
}
