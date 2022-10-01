import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { PostsList } from './features/post/PostList'
import { AddPostForm } from './features/post/AddPostFrom'

import { Navbar } from './app/Navbar'
import { SinglePostPage } from './features/post/SinglePostPage'
import { EditPostForm } from './features/post/EditPostForm'


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={ EditPostForm } />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
