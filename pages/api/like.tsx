import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body
  console.log('req', req.body)

  console.log('id', id)

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
  console.log('result', result)

  return res.json(result)
}
