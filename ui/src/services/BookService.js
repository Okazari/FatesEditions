import { ResourceService } from 'react-rest-resource'
import HttpService from './HttpService'
export default new ResourceService('/api/book',
  {
    name: {
      single: 'book',
      plural: 'books',
    },
  proxy: HttpService.fetch,
  }
)