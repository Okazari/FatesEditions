import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router'

// NEW LAYOUT
import Books, { Library, News } from './components/Books'
import Write, { Drafts } from './components/Write'
import Portal, { SignIn, SignUp, Recover } from './components/Portal'
import Game from './components/Game'

// OLD LAYOUT
import App from './components/Old/App'
import { PlayBooks, PlayGames } from './components/Old/Play'
import { ShareBook, SharePublications, ShareEditBook } from './components/Old/Share'
import { WriteBook, WriteDrafts, WritePage } from './components/Old/Write'
import Profile from './components/Old/Profile'

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="app">
        <IndexRedirect to="books" />
        <Route path="books" component={Books}>
          <IndexRedirect to="news" />
          <Route path="news" component={News} />
          <Route path="library" component={Library} />
        </Route>
        <Route path="write" component={Write}>
          <IndexRedirect to="drafts" />
          <Route path="drafts" component={Drafts} />
          <Route path="publications" component={Drafts} />
          <Route path="publish" component={Drafts} />
        </Route>
      </Route>
      <Route path="old">
        <IndexRedirect to="portal" />
        <Route path="portal" component={Portal}>
          <IndexRedirect to="signin" />
          <Route path="signin" component={SignIn} />
          <Route path="signup" component={SignUp} />
          <Route path="recover" component={Recover} />
        </Route>
        <Route component={Game} path="game/:gameId" />
        <Route component={App}>
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
            <Route path="edit/:bookId" component={ShareEditBook} />
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
