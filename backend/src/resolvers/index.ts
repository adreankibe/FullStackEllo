import { booksData } from '../data/books';

interface Args {
  search: string;
}

export const resolvers = {
  Query: {
    books: (parent: any, args: Args, context: any, info: any) => {
      const { search } = args;
      if (search) {
        return booksData.filter((book) => {
          return book.title.toLowerCase().includes(search.toLowerCase());
        });
      } else {
        return booksData;
      }
    },
  },
};