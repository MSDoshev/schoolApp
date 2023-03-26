import { Link } from "react-router-dom";
import styles from "./StudentDetails.module.css";
export const StudentDetails = () =>{

    return(
        <section id="game-details" className={styles.main}>
            <div className={styles.container}>
                <div className={styles.detailsBox}>
                    <div className={styles.image}>
                        <img alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VESbd5niUoLRa-VgPKiHyLaZgxXqnUP1kNGehA-_3tHQjOGHsLCcaHU-KGBkDEn8La0&usqp=CAU' />
                    </div>
                    <div className={styles.studentInfo}>
                        <h1>Student Details</h1>
                        <h2 >Ivan Ivanov</h2>
                        <div className={styles.info}>Grade: 6 </div>
                        <div className={styles.info}>Age: 10 </div>
                        <div className={styles.info}>Average Score: 5.49 </div>

                        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                        <div className={styles.buttons}>
                            <Link to={`/students/edit`} className={styles.aButton}>Edit</Link>
                            <button className={styles.button}>Delete</button>
                        </div>
                     </div>
                </div>  
            </div>

        </section>
    );
}