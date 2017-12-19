import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router'

// NEW LAYOUT
import Books, { Library, News } from './components/Books'
import MyBooks, { Drafts } from './components/MyBooks'
import WriteDraft, {
  DraftGeneral,
  DraftItems,
  DraftStats,
  DraftPages,
  WritePage,
  PageGeneral,
} from './components/Write'
import Portal, { SignIn, SignUp, Recover } from './components/Portal'
import Game from './components/Game'

// OLD LAYOUT
import App from './components/Old/App'
import { PlayBooks, PlayGames } from './components/Old/Play'
import { ShareBook, SharePublications, ShareEditBook } from './components/Old/Share'
import { WriteBook, WriteDrafts, WritePage as OldWritePage } from './components/Old/Write'
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
        <Route path="write" component={MyBooks}>
          <IndexRedirect to="drafts" />
          <Route path="drafts" component={Drafts} />
          <Route path="publications" component={Drafts} />
          <Route path="publish" component={Drafts} />
        </Route>
        <Route path="write/drafts/:draftId" component={WriteDraft}>
          <IndexRedirect to="general" />
          <Route path="general" component={DraftGeneral} />
          <Route path="stats" component={DraftStats} />
          <Route path="items" component={DraftItems} />
          <Route path="pages" component={DraftPages} />
        </Route>
        <Route path="write/drafts/:draftId/page/:pageId" component={WritePage}>
          <IndexRedirect to="general" />
          <Route path="general" component={PageGeneral} />
          <Route path="content" component={() => (<div> Coucou </div>)} />
          <Route path="transitions" component={() => (<div> Coucou </div>)} />
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
            <Route path="book/:bookId/page/:pageId" component={OldWritePage} />
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
