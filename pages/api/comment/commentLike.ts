import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function CommentLike(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { commentLikeId, ty } = req.body

  const likeNum = await prisma.comments.findUnique({
    where: {
      id: commentLikeId,
    },
  })

  const like = likeNum.like + 1

  const result = await prisma.comments.update({
    where: { id: commentLikeId },
    data: { like: like },
  })

  const users = await prisma.comments.findMany({
    where: { postId: 1 },
    include: { Users: true },
  })
  res.json(users)
}
