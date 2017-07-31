import React from 'react'
import BookGenre from '../../BookGenre'
import BookAuthor from '../../BookAuthor'
import Button from '../../../Button'
import RouteService from '../../../../../../services/RouteService'
import styles from './styles.scss'

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false,
    }
  }

  toggleDetails = () => {
    const { showDetails } = this.state
    this.setState({ showDetails: !showDetails })
  }

  startGame = (book) => {
    const { startGame } = this.props
    startGame(book).then(game => RouteService.goTo(`/app/game/${game._id}`))
  }

  render() {
    const { book } = this.props
    const { showDetails } = this.state

    return !!book && (
      <div className={styles.component}>
        <div className={styles.cover}>
          <div className={styles.genreContainer}>
            <div className={styles.genre}>
              <BookGenre genre={book.genreId} />
            </div>
          </div>
          <img src={book.cover} alt={book.name} />
        </div>
        <div className={styles.bookInformation}>
          <div className={styles.basicInfos}>
            <h3 className={styles.bookName}>{book.name}</h3>
            <p><BookAuthor author={book.authorId} /></p>
          </div>
          <div className={styles.buttons}>
            <span onClick={() => this.startGame(book)}><i className={'fa fa-gamepad'} /></span>
            <span onClick={this.toggleDetails}><i className={'fa fa-info'} /></span>
          </div>
        </div>
        { showDetails ?
          <div className={styles.showDetails}>
            <span onClick={this.toggleDetails} className={styles.detailsClose}><i className="fa fa-times-circle-o" /></span>
            <div className={styles.detailsContent}>
              <div className={styles.detailsLeft}>
                <div className={styles.detailsCover}>
                  <div className={styles.detailsGenreContainer}>
                    <div className={styles.detailsGenre}>
                      <BookGenre genre={book.genreId} />
                    </div>
                  </div>
                  <img src={book.cover} alt={book.name} />
                </div>
              </div>
              <div className={styles.detailsRight}>
                <p className={styles.bookName}>{book.name}</p>
                <p className={styles.bookAuthor}><BookAuthor author={book.authorId} /></p>
                <p className={styles.synopsis}>
                  {book.synopsis}
                </p>
                <div className={styles.tags}>
                  { book.tags && book.tags.map(tag => <span className="label label-primary">{tag}</span>) }
                </div>

                <Button className={styles.playBtn}>
                  <i className="fa fa-gamepad" /> Jouer
                </Button>
              </div>
            </div>
          </div>
          :
          null
        }
      </div>
    )
  }
}

export default Book
