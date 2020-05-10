import axios from "axios";

import createApiInstance from "./createApiInstance";
import { transformData } from "../";

import {
  loginApiModel
} from "./apiModels";



  // getData = () =>
  // axios({
  //     'method':'GET',
  //     'url':'https://example.com/query',
  //     'headers': {
  //         'content-type':'application/octet-stream',
  //         'x-rapidapi-host':'example.com',
  //         'x-rapidapi-key': process.env.RAPIDAPI_KEY
  //     },
  //     'params': {
  //         'search':'parameter',
  //     },
  // })



//axios instance for login
// const axiosLogin = axios.create({
//   ...createApiInstance("login", client),
//   headers: {
//     accept: "application/json",
    
//     "Content-Type": "application/json",
    
//   },
//   transformResponse: [
//     (data) => {
//       return transformData(data, loginApiModel);
//     },
//   ],
// });


export {
  axiosLogin, //model created
  
};
