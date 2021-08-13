import { useState } from 'react'
import Create from './create'
import Commenting from './commenting'

const Blog = (props) => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // const submitData = async (e: React.SyntheticEvent) => {
  //   try {
  //     console.log('submitdate', e)
  //     const body = { name, email }

  //     await fetch(`http://localhost:3000/api/push`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(body),
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div>
      <div className="page">
        <h1>My Blog</h1>
        <div>
          <Create />
        </div>

        <br />

        <div>
          <Commenting />
        </div>

        {console.log('feed', props)}
        <main>
          {props.comments.map((comments) => (
            <div key={comments.id} className="post">
              <div>id = {comments.id}</div>
              <div>name = {comments.user.name}</div>
              <div className="content">email = {comments.content}</div>
              <br />
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/users')
  const comments = await res.json()
  console.log('post', comments)
  return {
    props: { comments },
  }
}

export default Blog
