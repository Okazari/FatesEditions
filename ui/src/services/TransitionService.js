import { ResourceService } from 'react-rest-resource'
import HttpService from './HttpService'
export default new ResourceService('/api/transition',
  {
    name: {
      single: 'transition',
      plural: 'transitions',
      id: '_id'
    },
    proxy: HttpService.fetch,
  }
)
