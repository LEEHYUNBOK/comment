import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../lib/prisma'

export default async function CommentLike(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { commentLikeId, postId, checked } = req.body

  const likeNum = await prisma.comments.findUnique({
    where: {
      id: commentLikeId,
    },
  })

  const like = likeNum !== null ? likeNum.like + (checked ? 1 : -1) : 0

  const result = await prisma.comments.update({
    where: { id: commentLikeId },
    data: { like: like },
  })

  res.json(result)
}
