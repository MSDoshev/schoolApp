import {requestFactory} from "./requester"

const baseUrl = "http://localhost:3030/data/gallery"


export const galleryServiceFactory = (token) => {
     const request = requestFactory(token);
     
     const getAll = async() =>{

          const result = await request.get(baseUrl)
          const pictures = Object.values(result);
     
          return pictures;
     }
          
     const create = async (pictureData) => {
          const result = await request.post(baseUrl, pictureData);
     
          return result;
     
     }
     
    

     return{
          getAll,
          create,
     };
};
