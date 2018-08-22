import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router'

// Apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'services'

// Redux
import store from 'redux/store'
import { Provider } from 'react-redux'

// NEW LAYOUT
import Books, { Library, News } from './components/Views/Books'
import MyBooks, { Drafts, Publications, Publish } from './components/Views/MyBooks'
import WriteDraft, {
  DraftGeneral,
  DraftItems,
  DraftStats,
  DraftPages,
  WritePage,
  PageGeneral,
  PageContent,
  PageTransition,
} from './components/Views/Write'
import Portal, { SignIn as OldSignIn, SignUp as OldSignUp, Recover } from './components/Portal'
import { MyGames, GamesList } from './components/Views/MyGames'
import { GameView, TrialView } from './components/Views'
import Profile, { Password, Disconnect } from './components/Views/Profile'
import Connection, { SignIn, SignUp, PasswordRecovery } from './components/Views/Connection'
import BookDetails, { BookGeneral } from './components/Views/BookDetails'

// OLD LAYOUT
import App from './components/Old/App'
import { PlayBooks, PlayGames } from './components/Old/Play'
import { ShareBook, SharePublications, ShareEditBook } from './components/Old/Share'
import { WriteBook, WriteDrafts, WritePage as OldWritePage } from './components/Old/Write'
import { Profile as OldProfile } from './components/Old/Profile'

const AppRouter = () => {
  return (
    <ApolloProvider client={ApolloClient} >
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="app">
            <IndexRedirect to="books" />
            <Route path="books" component={Books}>
              <IndexRedirect to="news" />
              <Route path="news" component={News} />
              <Route path="library" component={Library} />
            </Route>
            <Route path="books/:bookId" component={BookDetails}>
              <IndexRedirect to="general" />
              <Route path="general" component={BookGeneral} />
            </Route>
            <Route path="mygames" component={MyGames}>
              <IndexRedirect to="list" />
              <Route path="list" component={GamesList} />
            </Route>
            <Route path="play/:gameId" component={GameView} />
            <Route path="trial/:bookId" component={TrialView} />
            <Route path="write" component={MyBooks}>
              <IndexRedirect to="drafts" />
              <Route path="drafts" component={Drafts} />
              <Route path="publications" component={Publications} />
              <Route path="publish" component={Publish} />
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
              <Route path="content" component={PageContent} />
              <Route path="transitions" component={PageTransition} />
            </Route>
            <Route path="profile" component={Profile}>
              <IndexRedirect to="password" />
              <Route path="password" component={Password} />
              <Route path="disconnect" component={Disconnect} />
            </Route>
            <Route path="connection" component={Connection}>
              <IndexRedirect to="signin" />
              <Route path="signin" component={SignIn} />
              <Route path="signup" component={SignUp} />
              <Route path="passwordrecovery" component={PasswordRecovery} />
            </Route>
          </Route>
          <Route path="old">
            <IndexRedirect to="portal" />
            <Route path="portal" component={Portal}>
              <IndexRedirect to="signin" />
              <Route path="signin" component={OldSignIn} />
              <Route path="signup" component={OldSignUp} />
              <Route path="recover" component={Recover} />
            </Route>
            <Route component={GameView} path="game/:gameId" />
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
                <IndexRoute component={OldProfile} />
              </Route>
            </Route>
          </Route>
        </Router>
      </Provider>
    </ApolloProvider>
  )
}

export default AppRouter
