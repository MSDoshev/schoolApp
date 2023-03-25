import styles from "./Login.module.css";

export const Login = () => {
    return (
        <section id="create-page" className={styles.auth}>
            <div className={styles.container}>
            <h1>Login</h1>
            <form id="create" method="POST">
                <div className={styles.main}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="ivan@abv.bg"/>
                    </div>
                    <div>
                        <label htmlFor="passowrd">Password:</label>
                        <input type="password" id="password" name="password" placeholder="*******"/>
                    </div>
                    <div className={styles.btnSubmit}>
                        <input type="submit" value="Login"/>
                    </div>
                </div>
            </form>
            </div>
        </section>
    );
};