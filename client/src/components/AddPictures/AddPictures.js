import styles from "./AddPictures.module.css";

import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const AddPictures = ({
    onCreatePictureSubmit
}) => {
    const { formErrors, formValidate } = useContext(AuthContext);

    const {values, changeHandler, onSubmit} = useForm({
        imageUrl: '',

    }, onCreatePictureSubmit)

    const disabled = Object.keys(formErrors).some(key => formErrors[key]);

    
    return (
        <section id="create-picture" className={styles.auth}>
            <div className={styles.container}>
            <h1>Add Picture</h1>
            <form id="create" method="POST" onSubmit={onSubmit}>
                <div className={styles.main}>
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
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Add" disabled={disabled}/>
                    </div>
                </div>
            </form>
            </div>
        </section>
    );
}