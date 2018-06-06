import { browserHistory } from 'react-router'

class RouteService {

  routes = {
    oldprofile: () => '/old/profile',
    signin: () => '/old/portal/signin',
    signup: () => '/old/portal/signup',
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
    playgame: id => `/app/play/${id}`,
    write: () => '/app/write',
    writedrafts: () => '/app/write/drafts',
    writepublications: () => '/app/write/publications',
    writepublish: () => '/app/write/publish',
    writebook: id => `/app/write/drafts/${id}`,
    writebookgeneral: id => `/app/write/drafts/${id}/general`,
    writebookstats: id => `/app/write/drafts/${id}/stats`,
    writebookitems: id => `/app/write/drafts/${id}/items`,
    writebookpages: id => `/app/write/drafts/${id}/pages`,
    writebookpage: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}`,
    writebookpagegeneral: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}/general`,
    writebookpagecontent: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}/content`,
    writebookpagetransitions: (bookId, pageId) => `/app/write/drafts/${bookId}/page/${pageId}/transitions`,
    profile: () => '/app/profile',
    profilepassword: () => '/app/profile/password',
  }

  goTo = (route) => {
    browserHistory.push(route)
  }

  // goBack = () => {

  // }

  redirect401 = () => {
    browserHistory.push(this.routes.signin())
  }

}

export default new RouteService()
