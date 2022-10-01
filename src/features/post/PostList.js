import React from 'react'

// react-redux
import { useSelector } from 'react-redux'

// react-router-dom
import { Link } from 'react-router-dom'
import { PostAuthor } from './postAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)
  console.log(posts)

  const orderdPosts = posts.slice().sort((a, b) => 
    b.date.localeCompare(a.date)
  )

  console.log('post orde ', orderdPosts)

  const renderedPosts = orderdPosts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <TimeAgo timestamp={post.date} />
        <PostAuthor userId={post.user}/>
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post}/>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}