import { browserHistory } from 'react-router'

class RouteService {

  routes = {
    profile: () => '/old/profile',
    signin: () => '/old/portal/signin',
    signup: () => '/old/portal/signup',
    recover: () => '/old/portal/recover',
    playbook: () => '/old/play/books',
    playgames: () => '/old/play/games',
    playgame: id => `/old/game/${id}`,
    sharebook: () => '/old/share/book',
    sharepublications: () => '/old/share/publications',
    editbook: id => `/old/share/edit/${id}`,
    // writedrafts: () => '/old/write/drafts',
    home: () => '/app/books',
    books: () => '/app/books',
    booksnews: () => '/app/books/news',
    bookslibrary: () => '/app/books/library',
    write: () => '/app/write',
    writedrafts: () => '/app/write/drafts',
    writebook: id => `/app/write/drafts/${id}`,
    writebookgeneral: id => `/app/write/drafts/${id}/general`,
    writebookstats: id => `/app/write/drafts/${id}/stats`,
    writebookitems: id => `/app/write/drafts/${id}/items`,
    writebookpages: id => `/app/write/drafts/${id}/pages`,
    writebookpage: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}`,
    writebookpagegeneral: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}/general`,
    writebookpagecontent: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}/content`,
    writebookpagetransitions: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}/transitions`,
  }

  goTo = (route) => {
    browserHistory.push(route)
  }

  redirect401 = () => {
    browserHistory.push(this.routes.signin())
  }

}

export default new RouteService()
