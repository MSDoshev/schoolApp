import {requestFactory} from "./requester"

const baseUrl = "http://localhost:3030/data/school-chat"


export const chatServiceFactory = (token) => {
     const request = requestFactory(token);
     
     const getAll = async() =>{

          const result = await request.get(baseUrl)
          const messages = Object.values(result);
     
          return messages;
     }
          
     const create = async (messageData) => {
          const result = await request.post(baseUrl, messageData);
     
          return result;
     
     }
     
    

     return{
          getAll,
          create,
     };
};