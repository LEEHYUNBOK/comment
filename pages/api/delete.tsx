import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log(req)

  const { name, email, id, ty } = req.body
  console.log('name + email', name + ' ' + email + ' ' + id + ' ' + ty)
  const com = await prisma.comments.findMany({
    where: {
      id: id,
      user: {
        name: name,
        email: email,
      },
    },
  })
  const inco = await prisma.inComments.findMany({
    where: {
      commentsId: id,
    },
  })

  if (com.length !== 0) {
    if (inco.length !== 0) {
      const result = await prisma.inComments.deleteMany({
        where: {
          commentsId: id,
        },
      })
    }
    const result = await prisma.comments.delete({
      where: {
        id: id,
      },
    })

    const users = await prisma.comments.findMany({
      include: { user: true },
    })
    res.json(users)
  } else {
    res.status(202).json('사용자가 아닙니다.')
  }
}
