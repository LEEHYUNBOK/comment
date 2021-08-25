import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, ty } = req.body

  const likeNum = await prisma.comments.findUnique({
    where: {
      id,
    },
  })

  const like = likeNum.like + 1

  const result = await prisma.comments.update({
    where: { id: id },
    data: { like: like },
  })

  const users = await prisma.comments.findMany({
    where: { postId: 1 },
    include: { Users: true },
  })
  res.json(users)
}
