import { Link } from "react-router-dom";
import styles from "../Students.module.css";
export const CatalogItem = ({
    _id,
    firstName,
    lastName,
    imageUrl,
    grade,
}) =>{

    return(
        <div className={styles.allStudentsInfo}>
        <img alt={`${firstName} ${lastName}`} src={imageUrl}/>
        <h2>{firstName} {lastName}</h2>
        <h6>Grade: {grade}</h6>
        <Link to={`/students/${_id}`} className={styles.detailsButton}>Details</Link>
        </div>
    );
}