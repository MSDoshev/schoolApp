import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import styles from "./Home.module.css"
export const Home = () => {

    const {isAuthenticated} = useContext(AuthContext);

    return(
        <section className={styles.main}>
           
            <div >
                <h1>Welcome to our school portal</h1>
                <Link to="/about">About Us</Link>
            </div>
            <div className={styles.grid}>
            <article>
                <h2>Gallery</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellendus eos, itaque in corporis totam doloribus consequuntur repudiandae dolorum ullam ratione sint aperiam! Reprehenderit, vero.</p>
                <Link to="/gallery">Go to Gallery</Link>
            </article>
            <article>
                <h2>Students</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellendus eos, itaque in corporis totam doloribus consequuntur repudiandae dolorum ullam ratione sint aperiam! Reprehenderit, vero.</p>
                {isAuthenticated &&(

                <Link to="/students">Go to Students</Link>
                )}
            </article>
            </div>
            
           
        </section>
    );
}