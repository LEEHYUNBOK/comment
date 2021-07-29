// Fake users data
const users = [
  { 
    id: 1,
    name: 'key1' 
  }, 
  { 
    id: 2 ,
    name: 'key2' 
  }, 
  { 
    id: 3 ,
    name: 'key3' 
  }]

export default function handler(req, res) {
  // Get data from your database
  // console.log('users rest', res)
  res.status(200).json(users)
}
