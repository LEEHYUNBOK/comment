import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const lable = prisma.comments

  const users = await lable.findMany({
    include: { user: true },
  })
  res.json(users)
}
