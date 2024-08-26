import { createPost } from '@/lib/action'
import React from 'react'

const ServeraAtionTestPage = () => {
  return (
    <div>
      <form action={createPost}>
        <input type='text' name='title' placeholder='title' ></input>
        <input type='text' name='desc' placeholder='desc' ></input>
        <input type='text' name='userId' placeholder='userId' ></input>
        <input type='text' name='slug' placeholder='slug' ></input>
        <button>Create Post</button>
      </form>
    </div>
  )
}

export default ServeraAtionTestPage