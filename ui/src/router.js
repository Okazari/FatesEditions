import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import Portal, { SignIn, SignUp, Recover } from './components/Portal'
import { PlayBooks, PlayGames } from './components/Play'
import { ShareBook, SharePublications } from './components/Share'
import { WriteBook, WriteDrafts, WritePage } from './components/Write'
import Profile from './components/Profile'

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRedirect to="portal" />
        <Route path="portal" component={Portal}>
          <IndexRedirect to="signin" />
          <Route path="signin" component={SignIn} />
          <Route path="signup" component={SignUp} />
          <Route path="recover" component={Recover} />
        </Route>
        <Route path="app" component={App}>
          <IndexRedirect to="play" />
          <Route path="play" >
            <IndexRedirect to="books" />
            <Route path="books" component={PlayBooks} />
            <Route path="Games" component={PlayGames} />
          </Route>
          <Route path="write" >
            <IndexRedirect to="drafts" />
            <Route path="drafts" component={WriteDrafts} />
            <Route path="book/:bookId" component={WriteBook} />
            <Route path="book/:bookId/page/:pageId" component={WritePage} />
          </Route>
          <Route path="share" >
            <IndexRedirect to="book" />
            <Route path="book" component={ShareBook} />
            <Route path="publications" component={SharePublications} />
          </Route>
          <Route path="profile" >
            <IndexRoute component={Profile} />
          </Route>
        </Route>
      </Route>
    </Router>
  )
}

export default AppRouter
