import { Link } from "react-router-dom";

import styles from "./Home.module.css"
export const Home = () => {
    return(
        <section className={styles.main}>
           
            <div >
                <h1>Welcome to our school portal</h1>
                <Link to="/about">About Us</Link>
            </div>

            <article>
                <h2>Gallery</h2>
                <Link to="/gallery">Go to Gallery</Link>
            </article>
            <article>
                <h2>Students</h2>
                <Link to="/students">Go to Students</Link>
            </article>

            
           
        </section>
    );
}