import { useState, useEffect, useCallback } from 'react';
import * as API from './MoviesAPI';
import Header from '../layout/header';
import Modal from '../modal';
import MovieCard from './MovieCard';
import MovieDetailsCard from './MovieDetailsCard';
import * as types from '../../types/movie';
import * as utils from '../../utils';

interface IState {
  movies: Array<types.IMovie>;
  movieDetails: types.IMovie | undefined;
  searchTerm: string;
  spinner: boolean;
  error: string;
}

const MoviesContainer = () => {

  const [state, setState] = useState<IState>({
    movies: [],
    movieDetails: undefined,
    searchTerm: '',
    spinner: false,
    error: '',
  });

  const fetchMoviesList = useCallback(async (): Promise<void> => {
    try {
      setState(state => ({ ...state, spinner: true }));
      const res: any = await API.getMovies();
      if (res.status === 200) {
        setState(state => ({ ...state, spinner: false, movies: res.data.results }));
      }
    } catch (err) {
      setState(state => ({ ...state, spinner: false, error: "An error occurred" }));
    }
  }, []);


  const fetchSearchedMovies = useCallback(async (searchTerm: string): Promise<void> => {
    try {
      setState(state => ({ ...state, spinner: true }));
      const res: any = await API.searchMovies(searchTerm);
      if (res.status === 200) {
        console.log(res);
        setState(state => ({ ...state, spinner: false, movies: res.data.results }));
      }
    } catch (err) {
      setState(state => ({ ...state, spinner: false, error: "An error occurred" }));
    }
  }, []);

  const onSearhTermChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    setState(state => ({ ...state, searchTerm: value }));
  };

  const getMovieDetails = (movie: types.IMovie): void => {
    setState(state => ({ ...state, movieDetails: movie }));
  };

  const onCloseModal = (): void => {
    setState(state => ({ ...state, movieDetails: undefined }));
  };

  useEffect(() => {
    let timeOutId: ReturnType<typeof setTimeout>;

    if (state.searchTerm.length) {
      timeOutId = setTimeout(() => {
        fetchSearchedMovies(state.searchTerm);
      }, 400);
    } else {
      fetchMoviesList();
    }
    return () => clearTimeout(timeOutId);

  }, [fetchMoviesList, fetchSearchedMovies, state.searchTerm]);

  const getStatus = (): string => {
    if (state.spinner) return "Loading";
    if (!state.movies.length) return 'No movie found';
    if (state.error.length) return state.error;
    return "";
  };

  return (
    <>
      <div className="container">
        <Header onSearchChange={onSearhTermChange} />
        <h2>Most Recent Movies</h2>
        <div>
          {getStatus()}
        </div>
      </div>
      <div className="wrapper">
        <div className="grid_container">
          {state.movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imageUrl={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path}`}
              vote_average={movie.vote_average}
              onGetMovie={() => getMovieDetails(movie)}
            />
          ))}
        </div>
      </div>

      {state.movieDetails ?
        <Modal open={state.movieDetails ? true : false} onClose={onCloseModal} >
          <MovieDetailsCard
            onClose={onCloseModal}
            overview={state.movieDetails.overview}
            release_date={utils.formatDate(state.movieDetails.release_date)}
            title={state.movieDetails.title}
            vote_average={state.movieDetails.vote_average}
            vote_count={state.movieDetails.vote_count}
            imageUrl={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${state.movieDetails.poster_path}`}
          />
        </Modal> : null}
    </>
  );
};

export default MoviesContainer;;;