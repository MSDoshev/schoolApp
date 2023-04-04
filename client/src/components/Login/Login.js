import styles from "./Login.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Login = () => {

    const {onLoginSubmit} = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        email:'',
        password:'',
    }, onLoginSubmit);

    return (
        <section id="create-page" className={styles.auth}>
            <div className={styles.container}>
            <h1>Login</h1>
            <form id="create" method="POST" onSubmit={onSubmit}>
                <div className={styles.main}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" 
                        id="email" 
                        name="email" 
                        placeholder="ivan@abv.bg"
                        value={values.email}
                        onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="passowrd">Password:</label>
                        <input type="password" 
                        id="password" 
                        name="password" 
                        placeholder="*******"
                        value={values.password}
                        onChange={changeHandler}
                        />
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