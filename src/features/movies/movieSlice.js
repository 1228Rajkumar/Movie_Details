import { createSlice } from '@reduxjs/toolkit';
import { popularMovies, searchByGenre, searchMovieDetail } from './moviesAction';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    loading: false,
    allMoviesData: [],
    movieData: [],
    genres: '',
    searchTerm: "",
    movieId:''
  },
  reducers: {
    reset: (state) => {
      state.loading = false;
    },
    setAllMovies: (state, action) => {
      state.allMovies = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setMovieId: (state, action) => {
      state.movieId = action.payload;
    },
  },

    extraReducers: (builder) => {
      builder.addCase(popularMovies.pending, (state) => {
        state.loading = true;
      })
        .addCase(popularMovies.fulfilled, (state, action) => {
          state.loading = false;
          state.allMoviesData = action.payload;
        })
        .addCase(popularMovies.rejected, (state, action) => {
          state.loading = false;
          state.allMoviesData = [];
        })
        .addCase(searchByGenre.pending, (state) => {
          state.loading = true;
        })
        .addCase(searchByGenre.fulfilled, (state, action) => {
          state.loading = false;
          state.allMoviesData = action.payload;
        })
        .addCase(searchByGenre.rejected, (state) => {
          state.loading = true;
          state.allMoviesData = [];
        })
        .addCase(searchMovieDetail.pending, (state) => {
          // state.loading = true;
        })
        .addCase(searchMovieDetail.fulfilled, (state, action) => {
          // state.loading = false;
          state.movieData = action.payload;
        })
        .addCase(searchMovieDetail.rejected, (state) => {
          // state.loading = true;
          state.movieData = [];
        })
    },
  },);

export const {
  setAllMovies,
  setGenres,
  setSearchTerm,
  reset,
  setMovieId
} = movieSlice.actions;

export default movieSlice.reducer;
