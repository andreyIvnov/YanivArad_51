import axios from "axios";
import { useState } from 'react'


const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const TODOS_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";
const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const MOVIES_ENDPOINT = "https://api.tvmaze.com/shows";

const getUserFullData = async (userId) => {
    const { data: userIfo } = await axios.get(`${USERS_ENDPOINT}/${userId}`)
    const { data: userToDose } = await axios.get(`${TODOS_ENDPOINT}?userId=${userId}`);
    const toDoseTitles = userToDose.slice(0, 5).map(todo => todo.title)

    const { data: userPosts } = await axios.get(`${POSTS_ENDPOINT}?userId=${userId}`);
    const postTitles = userPosts.slice(0, 1).map(post => post.title)


    const dataToReturn = { userId: userId, name: userIfo.name, email: userIfo.email, userToDose: [...toDoseTitles], userPosts: [...postTitles] };
    return dataToReturn;
};

const getAllUsersDetails = () => axios.get(USERS_ENDPOINT);

const getTasksByUserId = (userId) => axios.get(`${TODOS_ENDPOINT}?userId=${userId}`);

const getUserById = (userId) => axios.get(`${USERS_ENDPOINT}/${userId}`);

const getAllMovies = (filter) => filter ? axios.get(`${MOVIES_ENDPOINT}${filter}`) : axios.get(MOVIES_ENDPOINT);

const getMovieById = (movieId) => axios.get(`${MOVIES_ENDPOINT}/${movieId}`);

export { getUserFullData, getAllUsersDetails, getTasksByUserId, getUserById, getAllMovies, getMovieById};
