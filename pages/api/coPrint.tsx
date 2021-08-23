import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const { id, name, content, postId } = req.body

  const users = await prisma.comments.findMany({
    where: { postId: 1 },
    include: { user: true },
  })

  res.json(users)
}
