import {requestFactory} from "./requester"

const baseUrl = "http://localhost:3030/users"


export const userServiceFactory = (token) => {
     const request = requestFactory(token);
  
     const getOne = async(userId) =>{
     
          const result = await request.get(`${baseUrl}/me`);
     
          return result;
     }
     
     
     const edit = (userId, data) => request.put(`${baseUrl}/${userId}`, data);
     

     return{
          getOne,
          edit,
     };
};
