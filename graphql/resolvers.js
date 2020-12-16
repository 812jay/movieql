import { getMovies, getById } from "../db/db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation:{
    addMovie: (_,{name,score})=>
  }
};

export default resolvers;
