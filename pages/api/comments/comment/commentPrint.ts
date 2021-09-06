import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../lib/prisma'

export default async function CommentPrint(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postId } = req.query

  const users = await prisma.comments.findMany({
    where: { postId: String(postId) },
    include: { commentUsers: true },
  })

  res.json(users)
}
