import styles from "./Create.module.css";

export const Create = () => {
    return (
        <section id="create-page" className={styles.auth}>
            <div className={styles.container}>
            <h1>Add Student</h1>
            <form id="create" method="POST">
                <div className={styles.main}>
                    <div>
                        <label htmlFor="first-name">First Name:</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Ivan"/>
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Ivanov"/>
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" min="1" placeholder="10"/>
                    </div>
                    <div>
                        <label htmlFor="kid-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>
                    </div>
                    <div>
                        <label htmlFor="score">Average Score:</label>
                        <input type="number" id="score" name="score" min="1" placeholder="5"/>
                    </div>
                    <div>
                        <label htmlFor="grade">Grade:</label>
                        <input type="number" id="grade" name="grade" min="1" placeholder="6"/>
                    </div>
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Add Student"/>
                    </div>
                </div>
            </form>
            </div>
        </section>
    );
}