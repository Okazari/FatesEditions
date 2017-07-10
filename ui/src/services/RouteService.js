import { browserHistory } from 'react-router'

class RouteService {

  routes = {
    profile: () => '/app/profile',
    signin: () => '/app/portal/signin',
    signup: () => '/app/portal/signup',
    recover: () => '/app/portal/recover',
    home: () => '/app/play',
    playbook: () => '/app/play/books',
    playgames: () => '/app/play/games',
    sharebook: () => '/app/share/book',
    sharepublications: () => '/app/share/publications',
    writebook: id => `/app/write/book/${id}`,
    writebookpage: (bookId, pageId) => `/app/write/book/${bookId}/page/${pageId}`,
    writedrafts: () => '/app/write/drafts',
  }

  goTo = (route) => {
    browserHistory.push(route)
  }

}

export default new RouteService()
