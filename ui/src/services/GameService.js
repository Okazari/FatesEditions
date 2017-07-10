// eslint-disable-next-line
import { ResourceService } from 'react-rest-resource'
import HttpService from './HttpService'

export default new ResourceService('/api/game',
  {
    name: {
      single: 'game',
      plural: 'games',
      id: '_id',
    },
    proxy: HttpService.fetch,
  },
)
