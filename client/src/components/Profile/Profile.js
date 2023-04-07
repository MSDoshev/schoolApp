import styles from "./Profile.module.css";

import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { studentServiceFactory } from "../../services/studentService";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";
import { userServiceFactory } from "../../services/userService";

export const Profile = ({
    
}) =>{
    const { userId } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const userService = useService(userServiceFactory);
    const navigate = useNavigate();

   
    useEffect(() => {
        userService.getOne(userId)
            .then(result => {
                setUser(result);
                
            })
           

    }, [userId]);


    const isOwner = user._id === userId;
    console.log(user.email);
    return(
        <section id="user-details" className={styles.main}>
            <div className={styles.container}>
                <div className={styles.detailsBox}>
                    <div className={styles.image}>
                        <img alt={`${user.fullName}`} src={user.imageUrl} />
                    </div>
                    <div className={styles.studentInfo}>
                        <h1>Profile Details</h1>
                        <h2 >{user.fullName}</h2>
                        <div className={styles.info}>Email: {user.email} </div>

                        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                        {isOwner && (

                        <div className={styles.buttons}>
                            <Link to={`/profile/${user._id}/edit`} className={styles.aButton}>Edit</Link>
                        </div>
                        )}
                     </div>
                </div>  
            </div>

        </section>
    );
}