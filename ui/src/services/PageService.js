import { ResourceService } from 'react-rest-resource'
import HttpService from './HttpService'
export default new ResourceService('/api/page',
  {
    name: {
      single: 'page',
      plural: 'pages',
      id: '_id'
    },
    proxy: HttpService.fetch,
  }
)
