import styles from "./StudentDetails.module.css";

import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { studentServiceFactory } from "../../services/studentService";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";

export const StudentDetails = () =>{
    const { userId } = useContext(AuthContext);
    const {studentId} = useParams();
    const [student, setStudent] = useState({});
    const studentService = useService(studentServiceFactory);
    const navigate = useNavigate();


    useEffect(() => {
        studentService.getOne(studentId)
            .then(result => {
                setStudent(result);
                
            })
           

    }, [studentId, studentService]);


    const isOwner = student._ownerId === userId;

    const onDeleteClick = async() => {
        await studentService.delete(student._id);
        
        navigate('/students');
    }

    return(
        <section id="game-details" className={styles.main}>
            <div className={styles.container}>
                <div className={styles.detailsBox}>
                    <div className={styles.image}>
                        <img alt={`${student.firstName} ${student.lastName}`} src={student.imageUrl} />
                    </div>
                    <div className={styles.studentInfo}>
                        <h1>Student Details</h1>
                        <h2 >{student.firstName} {student.lastName}</h2>
                        <div className={styles.info}>Grade: {student.grade} </div>
                        <div className={styles.info}>Age: {student.age} </div>
                        <div className={styles.info}>Average Score: {student.score} </div>

                        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                        {isOwner && (

                        <div className={styles.buttons}>
                            <Link to={`/students/${student._id}/edit`} className={styles.aButton}>Edit</Link>
                            <button className={styles.button} onClick={onDeleteClick}>Delete</button>
                        </div>
                        )}
                     </div>
                </div>  
            </div>

        </section>
    );
}