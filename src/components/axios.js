import axios from 'axios';
 const instance = axios.create({
     //baseURL: 'http://localhost:5001/trip-planner-fbba2/us-central1/api'
     baseURL: 'https://functions-jade.vercel.app'
 });
 export default instance;