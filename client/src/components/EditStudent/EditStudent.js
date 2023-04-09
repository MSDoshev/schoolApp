import styles from "./Edit.module.css";

import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";


import { useService } from "../../hooks/useService";
import { studentServiceFactory } from "../../services/studentService";
import { AuthContext } from "../../contexts/AuthContext";
export const EditStudent = ({
    onStudentEditSubmit,
}) =>{
    const {studentId} = useParams();
    const { formErrors, formValidate } = useContext(AuthContext);
    const studentService = useService(studentServiceFactory);
    const {values, changeHandler, onSubmit, changeValues} = useForm({
        fullName:'',
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

   const disabled = Object.keys(formErrors).some(key => formErrors[key]);
    
    return(
        <section id="edit-page" className={styles.auth}>
            <div className={styles.container}>
            <h1>Edit Student</h1>
            <form id="edit" method="POST" onSubmit={onSubmit}>
                <div className={styles.main}>
                <div>
                        <label htmlFor="full-name">Full Name:</label>
                        <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        placeholder="Ivan Ivanov"
                        value={values.fullName} 
                        onChange={changeHandler}
                        onBlur={formValidate}
                        />
                    </div>
                    {formErrors.fullName &&
                        <p className={styles.formError}>
                            {formErrors.fullName}
                        </p>
                    }
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
                        onBlur={formValidate}
                        />
                    </div>
                    {formErrors.age &&
                        <p className={styles.formError}>
                            {formErrors.age}
                        </p>
                    }
                    <div>
                        <label htmlFor="kid-img">Image:</label>
                        <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        placeholder="Upload a photo..."
                        value={values.imageUrl} 
                        onChange={changeHandler}
                        onBlur={formValidate}
                        />
                    </div>
                    {formErrors.imageUrl &&
                        <p className={styles.formError}>
                            {formErrors.imageUrl}
                        </p>
                    }
                    <div>
                        <label htmlFor="score">Average Score:</label>
                        <input 
                        type="text" 
                        id="score" 
                        name="score" 
                        min="1" 
                        placeholder="5"
                        value={values.score} 
                        onChange={changeHandler}
                        onBlur={formValidate}
                        />
                    </div>
                    {formErrors.score &&
                        <p className={styles.formError}>
                            {formErrors.score}
                        </p>
                    }
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
                        onBlur={formValidate}
                        />
                    </div>
                    {formErrors.grade &&
                        <p className={styles.formError}>
                            {formErrors.grade}
                        </p>
                    }
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Edit Student" disabled={disabled}/>
                    </div>
                </div>
            </form>
            </div>
        </section>

    );
}