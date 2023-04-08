import styles from "./Create.module.css";

import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Create = ({
    onCreateStudentSubmit
}) => {
    const { formErrors, formValidate } = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        lastName:'',
        age: '',
        imageUrl: '',
        score:'',
        grade:'',

    }, onCreateStudentSubmit)
    const disabled = Object.keys(formErrors).some(key => formErrors[key]);

    return (
        <section id="create-page" className={styles.auth}>
            <div className={styles.container}>
            <h1>Add Student</h1>
            <form id="create" method="POST" onSubmit={onSubmit}>
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
                        type="number" 
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
                        <input type="submit" value="Add Student" disabled={disabled}/>
                    </div>
                </div>
            </form>
            </div>
        </section>
    );
}