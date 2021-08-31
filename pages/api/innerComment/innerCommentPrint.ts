import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function InnerComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  const users = await prisma.commentsInner.findMany({
    where: { commentsId: Number(id) },
    include: { commentUsers: true },
  })

  res.json(users)
}
