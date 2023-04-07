import {requestFactory} from "./requester"

const baseUrl = "http://localhost:3030/users"


export const userServiceFactory = (token) => {
     const request = requestFactory(token);
  
     const getOne = async() =>{
     
          const result = await request.get(`${baseUrl}/me`);
     
          return result;
     }
     
     
     const edit = (data) => request.put(`${baseUrl}/me`, data);
     

     return{
          getOne,
          edit,
     };
};
