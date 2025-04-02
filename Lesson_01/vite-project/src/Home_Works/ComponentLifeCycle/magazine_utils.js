import axios from "axios";

const FAKE_STORE_USERS_ENDPOINT = "https://fakestoreapi.com/users";
const FAKE_STORE_CARTS_ENDPOINT = "https://fakestoreapi.com/carts";
const FAKE_STORE_PRODUCTS_ENDPOINT = "https://fakestoreapi.com/products";

const getAllUsersDetails = () => axios.get(FAKE_STORE_USERS_ENDPOINT);

const getAllUsersCarts = () => axios.get(FAKE_STORE_CARTS_ENDPOINT);

const getAllUsersProducts = () => axios.get(FAKE_STORE_PRODUCTS_ENDPOINT);

export { getAllUsersDetails, getAllUsersCarts,  getAllUsersProducts};