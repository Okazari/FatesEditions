import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { RouletteContainer } from 'services/Roulette'

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
import { MyGames, GamesList } from './components/Views/MyGames'
import { GameView, TrialView } from './components/Views'
import Profile, { Password, Disconnect } from './components/Views/Profile'
import Connection, { SignIn, SignUp, PasswordRecovery } from './components/Views/Connection'
import BookDetails, { BookGeneral } from './components/Views/BookDetails'

const AppRouter = () => {
  return (
    <ApolloProvider client={ApolloClient} >
      <Provider store={store}>
        <div>
          <RouletteContainer />
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
          </Router>
        </div>
      </Provider>
    </ApolloProvider>
  )
}

export default AppRouter
