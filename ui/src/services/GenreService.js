// eslint-disable-next-line
import { ResourceService } from 'react-rest-resource'
import HttpService from './HttpService'

export default new ResourceService('/api/genre',
  {
    name: {
      single: 'genre',
      plural: 'genres',
      id: '_id',
    },
    proxy: HttpService.fetch,
  },
)
