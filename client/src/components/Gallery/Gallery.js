import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";

export const Gallery = () => {

    return (
        <section className={styles.galleryPage}>
            <h1>Gallery</h1>

            <Link to='/addPhoto'>+</Link>
            <div className={styles.allPictures}>

                <img src="https://previews.123rf.com/images/romrodinka/romrodinka1810/romrodinka181000714/110887825-portrait-of-cute-healthy-happy-school-kid-boy-at-home-making-homework-little-child-writing-with.jpg"/>
                <img src="https://previews.123rf.com/images/romrodinka/romrodinka1810/romrodinka181000714/110887825-portrait-of-cute-healthy-happy-school-kid-boy-at-home-making-homework-little-child-writing-with.jpg"/>
                <img src="https://previews.123rf.com/images/romrodinka/romrodinka1810/romrodinka181000714/110887825-portrait-of-cute-healthy-happy-school-kid-boy-at-home-making-homework-little-child-writing-with.jpg"/>
                <img src="https://previews.123rf.com/images/romrodinka/romrodinka1810/romrodinka181000714/110887825-portrait-of-cute-healthy-happy-school-kid-boy-at-home-making-homework-little-child-writing-with.jpg"/>
                <img src="https://previews.123rf.com/images/romrodinka/romrodinka1810/romrodinka181000714/110887825-portrait-of-cute-healthy-happy-school-kid-boy-at-home-making-homework-little-child-writing-with.jpg"/>
                <img src="https://previews.123rf.com/images/romrodinka/romrodinka1810/romrodinka181000714/110887825-portrait-of-cute-healthy-happy-school-kid-boy-at-home-making-homework-little-child-writing-with.jpg"/>
                <img src="https://previews.123rf.com/images/romrodinka/romrodinka1810/romrodinka181000714/110887825-portrait-of-cute-healthy-happy-school-kid-boy-at-home-making-homework-little-child-writing-with.jpg"/>
                                  
            </div>

            {/* {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )} */}
        </section>
    );
}