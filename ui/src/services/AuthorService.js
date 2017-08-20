// eslint-disable-next-line
import { ResourceService } from 'react-rest-resource'
import HttpService from './HttpService'

export default new ResourceService('/api/author',
  {
    name: {
      single: 'author',
      plural: 'authors',
      id: '_id',
    },
    proxy: HttpService.fetch,
  },
)
