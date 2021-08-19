import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, id, il } = req.body
  console.log('name + email', name + ' ' + email + ' ' + id + ' ' + il)

  const com = await prisma.comments.findMany({
    where: {
      id: id,
      user: {
        name,
        email,
      },
    },
  })

  console.log('users', com.length)
  // if (com.length !== 0) {
  //   const result = await prisma.comments.delete({
  //     where: {
  //       id: id,
  //     },
  //   })
  //   console.log('result', result)
  //   res.json(result)
  // } else {
  //   res.status(202).json('')
  // }
}
