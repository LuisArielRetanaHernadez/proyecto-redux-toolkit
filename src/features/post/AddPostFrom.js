import React, { useState } from 'react'

// actions of postSlice
import { postAdded } from './postSlice' 

// react-redux
import { useDispatch, useSelector } from 'react-redux'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSovePostClicked = () => {
    console.log('from')
    if (title && content) {
        dispatch(postAdded({
            title, 
            content,
            userId,
        }))
    }

    setTitle('')
    setContent('')
  }

  const onSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptiones = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthot" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptiones}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSovePostClicked} disabled={!onSave}>Save Post</button>
      </form>
    </section>
  )
}