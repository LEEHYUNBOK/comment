// Fake users data
const users = [
  {
    id: 1,
    name: 'key1',
  },
  {
    id: 2,
    name: 'key2',
  },
  {
    id: 3,
    name: 'key3',
  },
]

const using = [
  {
    id: 3,
    name: 'key4',
  },
  {
    id: 4,
    name: 'key4',
  },
  {
    id: 5,
    name: 'key5',
  },
]

const createData = (data) => {
  console.log('createData', data)
  const dater = {
    id: 4,
    name: data,
  }
  users.push(dater)
  return users
}

export default function handler(req, res) {
  // Get data from your database
  switch (req.query.method) {
    // res.status(200).json(createData(req.query.name))
    case 'find': {
      res.status(200).json(users)
      break
    }

    case 'push': {
      res.status(200).json(createData(req.query.name))
      console.log('시작페이지', users)
      console.log('받아온 값', req.query.name)
      // res.status(200).json(using)
      break
    }
    default:
      break
  }
  // if (req.query.method == 'find') {
  //   res.status(200).json(users)
  // }

  // if (req.query.method == 'push') {
  //   res.status(200).json(createData(req.query.name))
  //   console.log('시작페이지', users)
  //   // res.status(200).json(using)
  // }
}
