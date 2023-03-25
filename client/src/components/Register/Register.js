import styles from "./Register.module.css";

export const Register = () => {
    return (
        <section id="create-page" className={styles.auth}>
            <div className={styles.container}>
            <h1>Register</h1>
            <form id="create" method="POST">
                <div className={styles.main}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="ivan@abg.bg"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="********"/>
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">Repeat Password:</label>
                        <input type="password" id="repeatPassword" name="repeatPassword" placeholder="********"/>
                    </div>
                    <div>
                        <label htmlFor="kid-img">Role:</label>
                        <select id="imageUrl" name="imageUrl" >
                            <option value="teacher">Teacher</option>
                            <option value="parent">Parent</option>
                        </select>
                    </div>
                    
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Register"/>
                    </div>
                </div>
            </form>
            </div>
        </section>
    );
}