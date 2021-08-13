import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const users = await prisma.users.findMany()
  res.json(users)
}
