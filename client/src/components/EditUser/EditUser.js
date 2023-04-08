import styles from "./Edit.module.css";

import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";


import { useService } from "../../hooks/useService";
import { userServiceFactory } from "../../services/userService";
import { AuthContext } from "../../contexts/AuthContext";
export const EditUser = ({
    onUserEditSubmit,
}) =>{
    const { userId, formErrors, formValidate } = useContext(AuthContext);
    
    const userService = useService(userServiceFactory);
    const {values, changeHandler, onSubmit, changeValues} = useForm({
        fullName : '',
        email:'',
        imageUrl: '',
      

   }, onUserEditSubmit)


   useEffect(() => {
    userService.getOne(userId)
        .then(result =>{
            changeValues(result);
        })
   }, [userId])



  
   const disabled = Object.keys(formErrors).some(key => formErrors[key]);
   

    return(
        <section id="edit-page" className={styles.auth}>
            <div className={styles.container}>
            <h1>Edit Student</h1>
            <form id="edit" method="POST" onSubmit={onSubmit}>
                <div className={styles.main}>
                    <div>
                        <label htmlFor="fullName">Full Name:</label>
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
                        <label htmlFor="email">Email:</label>
                        <input 
                        type="text" 
                        id="email"
                        name="email" 
                        placeholder="ivan@abv.bg"
                        value={values.email} 
                        onChange={changeHandler}
                        onBlur={formValidate}
                        />
                    </div>
                    {formErrors.email &&
                        <p className={styles.formError}>
                            {formErrors.email}
                        </p>
                    }
                    <div>
                        <label htmlFor="user-img">Image:</label>
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
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Edit Profile" disabled={disabled}/>
                    </div>
                </div>
            </form>
            </div>
        </section>

    );
}