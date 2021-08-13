import { useState } from 'react'

const Blog = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    try {
      console.log('submitdate', e)
      const body = { name, email }

      await fetch(`http://localhost:3000/api/push`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div className="page">
        <h1>My Blog</h1>

        <form onSubmit={submitData}>
          <h1>Signup user</h1>
          <input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
          <br />
          <textarea
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            value={email}
          ></textarea>
          <input disabled={!name || !email} type="submit" value="Signup" />
        </form>

        {console.log('feed', props)}
        <h1>zzzzzz</h1>
        <main>
          {props.users.map((user) => (
            <div key={user.id} className="post">
              <div>id = {user.id}</div>
              <div>name = {user.name}</div>
              <div>email = {user.email}</div>
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
  const users = await res.json()
  console.log('post', users)
  return {
    props: { users },
  }
}

export default Blog
