import { browserHistory } from 'react-router'

class RouteService {

  routes = {
    profile: () => '/old/profile',
    signin: () => '/old/portal/signin',
    signup: () => '/old/portal/signup',
    recover: () => '/old/portal/recover',
    home: () => '/old/play',
    playbook: () => '/old/play/books',
    playgames: () => '/old/play/games',
    playgame: id => `/old/game/${id}`,
    sharebook: () => '/old/share/book',
    sharepublications: () => '/old/share/publications',
    editbook: id => `/old/share/edit/${id}`,
    writebookpage: (bookId, pageId) => `/old/write/book/${bookId}/page/${pageId}`,
    // writedrafts: () => '/old/write/drafts',
    books: () => '/app/books',
    booksnews: () => '/app/books/news',
    bookslibrary: () => '/app/books/library',
    write: () => '/app/write',
    writedrafts: () => '/app/write/drafts',
    writebook: id => `/app/write/drafts/${id}`,
  }

  goTo = (route) => {
    browserHistory.push(route)
  }

  redirect401 = () => {
    browserHistory.push(this.routes.signin())
  }

}

export default new RouteService()
