import { Link } from "react-router-dom";
import styles from "../Students.module.css";
export const CatalogItem = ({
    _id,
    fullName,
    imageUrl,
    grade,
}) =>{

    return(
        <div className={styles.allStudentsInfo}>
        <img alt={`${fullName}`} src={imageUrl}/>
        <h2>{fullName}</h2>
        <h6>Grade: {grade}</h6>
        <Link to={`/students/${_id}`} className={styles.detailsButton}>Details</Link>
        </div>
    );
}