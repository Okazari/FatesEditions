// eslint-disable-next-line
import { ResourceService } from 'react-rest-resource'
import HttpService from './HttpService'

export default new ResourceService('/api/draft',
  {
    name: {
      single: 'draft',
      plural: 'drafts',
      id: '_id',
    },
    proxy: HttpService.fetch,
  },
)
