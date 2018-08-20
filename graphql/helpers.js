const Book = require("../models/BookModel");

const easier = (ressource, save) => {
  const newSave = () => save().then(() => ressource);
  return {
    ressource,
    save: newSave,
    set: newValues => easier(Object.assign(ressource, newValues), save),
    selectOne: (key, id) => easier(ressource[key].id(id), save),
    addOne: (key, newOne) => {
      ressource[key].unshift(newOne);
      return easier(ressource, save);
    },
    deleteOne: (key, id) => {
      ressource[key] = ressource[key].filter(r => r.id !== id);
      return easier(ressource, save);
    }
  };
};

const findBookById = bookId => {
  return Book.findById(bookId).then(book => easier(book, () => book.save()));
};

generateGame = (book, playerId) => {
  const stats = book.stats.reduce((acc, stat) => {
    return {
      ...acc,
      [stat._id]: stat.initValue
    };
  }, {});

  const objects = book.objects.reduce((acc, object) => {
    if (object.atStart) return [...acc, object._id];
    return acc;
  }, []);

  return {
    currentPageId: book.startingPageId || book.pages[0].id,
    playerId,
    book,
    stats,
    objects
  };
};

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.code = 401;
    this.message = message || "Not authorized";
  }
}

const isAuth = resolver => (obj, args = {}, context, info) => {
  if (!context.user) throw new UnauthorizedError();
  return resolver(obj, args, context, info);
};

module.exports = {
  findBookById,
  generateGame,
  isAuth
};
