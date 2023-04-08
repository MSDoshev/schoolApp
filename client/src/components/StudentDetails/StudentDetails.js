import styles from "./StudentDetails.module.css";

import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { studentServiceFactory } from "../../services/studentService";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";

export const StudentDetails = ({
    deleteStudent
}) =>{
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
           

    }, [studentId]);


    const isOwner = student._ownerId === userId;

    const onDeleteClick = async() => {
        //eslint-disable-next-line no-restricted-globals
        const result = confirm(`Do you want to delete this student "${student.fullName}"`)
       
       if(result){
        await studentService.delete(student._id);
        
        deleteStudent(student._id)
        navigate('/students');
       }
    }


    return(
        <section id="game-details" className={styles.main}>
            <div className={styles.container}>
                <div className={styles.detailsBox}>
                    <div className={styles.image}>
                        <img alt={`${student.fullName}`} src={student.imageUrl} />
                    </div>
                    <div className={styles.studentInfo}>
                        <h1>Student Details</h1>
                        <h2 >{student.fullName}</h2>
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