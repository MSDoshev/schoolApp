import styles from "./Gallery.module.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";




export const Gallery = ({
    pictures
}) => {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <section className={styles.galleryPage}>
            <div className={styles.title}>
            <h1>Gallery</h1>
            {isAuthenticated && (
            <Link to='/gallery/create'>+</Link>
            )}
            </div>
            <div className={styles.allPictures}>
                {pictures.map(x => <img src={x.imageUrl}/>)}
                
                        
            </div>

             {pictures.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )} 
        </section>
    );
}