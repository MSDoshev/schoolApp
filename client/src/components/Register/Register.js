import styles from "./Register.module.css";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {

    const {onRegisterSubmit} = useContext(AuthContext)
    const {values, changeHandler, onSubmit} = useForm({
        email:'',
        imageUrl:'',
        fullName:'',
        password:'',
        confirmPassword: '',
        role:'teacher',

    }, onRegisterSubmit)

    return (
        <section id="create-page" className={styles.auth}>
            <div className={styles.container}>
            <h1>Register</h1>
            <form id="create" method="POST" onSubmit={onSubmit}>
                <div className={styles.main}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="ivan@abv.bg"
                        value={values.email}
                        onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="fullName">Full Name:</label>
                        <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        placeholder="Ivan Ivanov"
                        value={values.fullName}
                        onChange={changeHandler}
                        />
                    </div>
                   
                    <div>
                        <label htmlFor="imageUrl">ImageUrl:</label>
                        <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        placeholder="http://"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="********"
                        value={values.password}
                        onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">Repeat Password:</label>
                        <input 
                        type="password" 
                        id="repeatPassword" 
                        name="confirmPassword" 
                        placeholder="********"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="role">Role:</label>
                        <select id="role" name="role" value={values.role} onChange={changeHandler}>
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