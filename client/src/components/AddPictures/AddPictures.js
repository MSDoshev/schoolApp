import styles from "./AddPictures.module.css";

import { useForm } from "../../hooks/useForm";

export const AddPictures = ({
    onCreatePictureSubmit
}) => {
    const {values, changeHandler, onSubmit} = useForm({
        imageUrl: '',

    }, onCreatePictureSubmit)
    
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
                        onChange={changeHandler}/>
                    </div>
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Add"/>
                    </div>
                </div>
            </form>
            </div>
        </section>
    );
}