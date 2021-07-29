const createData = (data) => [
  {
    users: [
      ...users,
      {
        id: 4,
        name: data,
      },
    ],
  },
]

export default function handler(req, res) {
  // Get data from your database
  console.log(req.query.name)
  res.status(200).json(createData(req.query.name))
}
