import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const popularMovies = createAsyncThunk("movies/popular", async (_,thunkAPI) => {
    const options = {
        method: 'GET',
        url: 'https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/',
        headers: {
          'X-RapidAPI-Key': '233a9af9dfmshadfda3117b49ab5p1ad8ffjsn73ce388d5c09',
          'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
      };

    try {
        const response = await axios.request(options);
        
        // console.log(response.data.results);
        return response.data.results;

    } catch (error) {
        //rejectWithValue send the error as a payload
        return thunkAPI.rejectWithValue(error);
    }
});


export const searchByGenre = createAsyncThunk("movies/searchByGenre", async (genre,thunkAPI) => {

    const options = {
        method: 'GET',
        url: `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genre}`,
        headers: {
          'X-RapidAPI-Key': '233a9af9dfmshadfda3117b49ab5p1ad8ffjsn73ce388d5c09',
          'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
      };

    try {
        const response = await axios.request(options);
        
        // console.log(response.data.results);
        return response.data.results;

    } catch (error) {
        //rejectWithValue send the error as a payload
        return thunkAPI.rejectWithValue(error);
    }
});

export const searchMovieDetail = createAsyncThunk("movies/searchMovieDetail", async (movieId,thunkAPI) => {

    const options = {
        method: 'GET',
        url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${movieId}`,
        headers: {
          'X-RapidAPI-Key': '233a9af9dfmshadfda3117b49ab5p1ad8ffjsn73ce388d5c09',
          'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
      };

    try {
        const response = await axios.request(options);
        
        console.log(response.data.results);
        return response.data.results;

    } catch (error) {
        //rejectWithValue send the error as a payload
        return thunkAPI.rejectWithValue(error);
    }
});

