import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, content } = req.body
  console.log('name + email', name + ' ' + content)
  const result = await prisma.comments.create({
    data: {
      content: content,
      user: { connect: { name: name } },
    },
  })
  console.log('result', result)
  res.json(result)
}
