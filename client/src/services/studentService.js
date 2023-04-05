import {requestFactory} from "./requester"

const baseUrl = "http://localhost:3030/data/students"


export const studentServiceFactory = (token) => {
     const request = requestFactory(token);
     
     const getAll = async() =>{

          const result = await request.get(baseUrl)
          const students = Object.values(result);
     
          return students;
     }
     const getOne = async(studentId) =>{
     
          const result = await request.get(`${baseUrl}/${studentId}`);
     
          return result;
     }
     
     const create = async (studentData) => {
          const result = await request.post(baseUrl, studentData);
     
          return result;
     
     }
     
     const edit = (studentId, data) => request.put(`${baseUrl}/${studentId}`, data)
     
     
     const deleteStudent = (studentId) => request.delete(`${baseUrl}/${studentId}`)
     

     return{
          getAll,
          getOne,
          create,
          edit,
          delete: deleteStudent,
         
     };
};
