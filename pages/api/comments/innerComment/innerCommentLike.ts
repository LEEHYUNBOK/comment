import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../lib/prisma'

export default async function InnerCommentLike(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { commentLikeId } = req.body

  const likeNum = await prisma.commentsInner.findUnique({
    where: {
      id: commentLikeId,
    },
  })

  const like = likeNum.like + 1

  const result = await prisma.commentsInner.update({
    where: { id: commentLikeId },
    data: { like: like },
  })
  res.json(result)
}
