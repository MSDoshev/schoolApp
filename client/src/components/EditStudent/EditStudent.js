import styles from "./Edit.module.css";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";


import { useService } from "../../hooks/useService";
import { studentServiceFactory } from "../../services/studentService";
export const EditStudent = ({
    onStudentEditSubmit,
}) =>{
    const {studentId} = useParams();
    const studentService = useService(studentServiceFactory);
    const {values, changeHandler, onSubmit, changeValues} = useForm({
        firstName : '',
        lastName:'',
        age: '',
        imageUrl: '',
        score:'',
        grade:'',

   }, onStudentEditSubmit)


   useEffect(() => {
    studentService.getOne(studentId)
        .then(result =>{
            changeValues(result);
        })
   }, [studentId])
    return(
        <section id="edit-page" className={styles.auth}>
            <div className={styles.container}>
            <h1>Edit Student</h1>
            <form id="edit" method="POST" onSubmit={onSubmit}>
                <div className={styles.main}>
                    <div>
                        <label htmlFor="first-name">First Name:</label>
                        <input 
                        type="text" 
                        id="firstName"
                        name="firstName" 
                        placeholder="Ivan"
                        value={values.firstName} 
                        onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name:</label>
                        <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        placeholder="Ivanov"
                        value={values.lastName} 
                        onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        min="1" 
                        placeholder="10"
                        value={values.age} 
                        onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="kid-img">Image:</label>
                        <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        placeholder="Upload a photo..."
                        value={values.imageUrl} 
                        onChange={changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="score">Average Score:</label>
                        <input 
                        type="number" 
                        id="score" 
                        name="score" 
                        min="1" 
                        placeholder="5"
                        value={values.score} 
                        onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="grade">Grade:</label>
                        <input 
                        type="number" 
                        id="grade" 
                        name="grade" 
                        min="1" 
                        placeholder="6"
                        value={values.grade} 
                        onChange={changeHandler}
                        />
                    </div>
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Edit Student"/>
                    </div>
                </div>
            </form>
            </div>
        </section>

    );
}