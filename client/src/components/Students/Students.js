import styles from "./Students.module.css";
import { CatalogItem } from "./StudentsCard/StudentsCard";

export const Students = ({
    students
}) => {

    return (
        <section className={styles.catalogPage}>
            <h1>All Students</h1>
            <div className={styles.allStudents}>
              {students.map(x => <CatalogItem key={x._id} {...x}/>)}

              {students.length === 0 && (
                <h3>No students were added.</h3>
              )}
                
                
            </div>

        </section>
    );
}