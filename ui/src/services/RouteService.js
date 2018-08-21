import { browserHistory } from 'react-router'
import { AuthService } from 'services'

class RouteService {

  routes = {
    oldprofile: () => '/old/profile',
    oldsignin: () => '/old/portal/signin',
    oldsignup: () => '/old/portal/signup',
    recover: () => '/old/portal/recover',
    playbook: () => '/old/play/books',
    playgames: () => '/old/play/games',
    // playgame: id => `/old/game/${id}`,
    sharebook: () => '/old/share/book',
    sharepublications: () => '/old/share/publications',
    editbook: id => `/old/share/edit/${id}`,

    home: () => '/app/books',
    books: () => '/app/books',
    booksnews: () => '/app/books/news',
    bookslibrary: () => '/app/books/library',
    book: bookId => `/app/books/${bookId}`,
    bookgeneral: bookId => `/app/books/${bookId}/general`,
    mygames: () => '/app/mygames',
    mygameslist: () => '/app/mygames/list',
    playgame: gameId => `/app/play/${gameId}`,
    trialgame: bookId => `/app/trial/${bookId}`,
    write: () => '/app/write',
    writedrafts: () => '/app/write/drafts',
    writepublications: () => '/app/write/publications',
    writebook: id => `/app/write/drafts/${id}`,
    writebookgeneral: id => `/app/write/drafts/${id}/general`,
    writebookstats: id => `/app/write/drafts/${id}/stats`,
    writebookitems: id => `/app/write/drafts/${id}/items`,
    writebookpages: id => `/app/write/drafts/${id}/pages`,
    writebookpage: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}`,
    writebookpagegeneral: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}/general`,
    writebookpagecontent: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}/content`,
    writebookpagetransitions: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}/transitions`,
    connection: () => '/app/connection',
    signin: () => '/app/connection/signin',
    signup: () => '/app/connection/signup',
    profile: () => '/app/profile',
    profilepassword: () => '/app/profile/password',
    profiledisconnect: () => '/app/profile/disconnect',
  }

  goTo = (route) => {
    browserHistory.push(route)
  }

  goBack = () => {
    browserHistory.goBack()
  }

  redirect401 = () => {
    AuthService.logout()
    browserHistory.push({
      pathname: this.routes.connection(),
      state: { isRedirected: true },
    })
  }
}

export default new RouteService()
