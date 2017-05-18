// eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import GenreOption from './GenreOption'
import { GenreService } from '../../../../../../services'

export default restHoc(GenreOption, GenreService)
