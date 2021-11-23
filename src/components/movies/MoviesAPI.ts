import { request } from '../../api';

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

export const getMovies = async (): Promise<any> => {
  try {
    const url: string = `/movie/now_playing?api_key=${API_KEY}`;
    const res: Promise<any> = await request.get(url);
    return res;
  } catch (err: unknown) {
    return err;
  }
};

export const searchMovies = async (searchTerm: string): Promise<any> => {
  try {
    const url: string = `/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
    const res: Promise<any> = await request.get(url);
    return res;
  } catch (err: unknown) {
    return err;
  }
};
