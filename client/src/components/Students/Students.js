import { Link } from "react-router-dom";
import styles from "./Students.module.css";

export const Students = () => {

    return (
        <section className={styles.catalogPage}>
            <h1>All Students</h1>
            <div className={styles.allStudents}>
                <div className={styles.allStudentsInfo}>
                    <img src="https://previews.123rf.com/images/romrodinka/romrodinka1810/romrodinka181000714/110887825-portrait-of-cute-healthy-happy-school-kid-boy-at-home-making-homework-little-child-writing-with.jpg"/>
                    <h2>Ivan Ivanov</h2>
                    <h6>Grade: 6</h6>
                    <Link to={`/students/details`} className={styles.detailsButton}>Details</Link>
                </div>
                <div className={styles.allStudentsInfo}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VESbd5niUoLRa-VgPKiHyLaZgxXqnUP1kNGehA-_3tHQjOGHsLCcaHU-KGBkDEn8La0&usqp=CAU"/>
                    <h2>Gosho Ivanov</h2>
                    <h6>Grade: 6 </h6>
                    <Link to={`/students/details`} className={styles.detailsButton}>Details</Link>
                </div>
                <div className={styles.allStudentsInfo}>
                    <img src=""/>
                    <h2>Ivan Ivanov</h2>
                    <h6>Grade: 6</h6>
                    <Link to={`/students/details`} className={styles.detailsButton}>Details</Link>
                </div>
                <div className={styles.allStudentsInfo}>
                    <img src=""/>
                    <h2>Ivan Ivanov</h2>
                    <h6>Grade: 6</h6>
                    <Link to={`/students/details`} className={styles.detailsButton}>Details</Link>
                </div>
                <div className={styles.allStudentsInfo}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAinuYSx94a3UrxfwZ9yFN0SAmh1FTuOiJA&usqp=CAU"/>
                    <h2>Mityo Ivanov</h2>
                    <h6>Grade: 6</h6>
                    <Link to={`/students/details`} className={styles.detailsButton}>Details</Link>
                </div>
                <div className={styles.allStudentsInfo}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VESbd5niUoLRa-VgPKiHyLaZgxXqnUP1kNGehA-_3tHQjOGHsLCcaHU-KGBkDEn8La0&usqp=CAU"/>
                    <h2>Ivan Ivanov</h2>
                    <h6>Grade: 6</h6>
                    <Link to={`/students/details`} className={styles.detailsButton}>Details</Link>
                </div>
                
            </div>

            {/* {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )} */}
        </section>
    );
}