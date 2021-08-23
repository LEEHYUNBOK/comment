import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let len: any = prisma.comments

  const { name, email, id, commentId, ty } = req.body
  function setting() {
    ty === 'in' ? (len = prisma.inComments) : len
  }
  setting()

  console.log('name + email', name + ' ' + email + ' ' + id + ' ' + ty)
  const com = await len.findMany({
    where: {
      id: id,
      user: {
        name: name,
        email: email,
      },
    },
  })
  // console.log('comcom', com[0].commentsId)

  const inco = await prisma.inComments.findMany({
    where: {
      commentsId: id,
    },
  })

  if (com.length !== 0) {
    if (inco.length !== 0 && ty !== 'in') {
      const result = await prisma.inComments.deleteMany({
        where: {
          commentsId: id,
        },
      })
    }
    const result = await len.delete({
      where: {
        id: id,
      },
    })
    if (com[0].commentsId === undefined) {
      const users = await len.findMany({
        where: { postId: 1 },
        include: { user: true },
      })
      res.json(users)
    } else {
      const users = await len.findMany({
        where: { commentsId: commentId },
        include: { user: true },
      })
      res.json(users)
    }
  } else {
    res.status(202).json('사용자가 아닙니다.')
  }
}
