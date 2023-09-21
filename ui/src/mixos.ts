import axios from "axios";
// "https://jsonplaceholder.typicode.com",
const instance = axios.create({
    baseURL: 'http://localhost:3000/',   
});
interface ApiResponse<T>{
    data:T
}
export const fetcher = {
    get: instance.get,
    post: instance.post,
    response:<T>(data:T):ApiResponse<T> => ({data})
}