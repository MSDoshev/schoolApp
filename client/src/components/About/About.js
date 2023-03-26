import styles from "./About.module.css";

export const About = () => {

    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <h1>About Page</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe voluptas a numquam sit, tempora perspiciatis similique minima corrupti debitis tempore voluptatum recusandae, veritatis nihil error assumenda et dignissimos deleniti eius aut quam fuga itaque ducimus libero? Vitae nobis illo numquam recusandae veniam repellendus. Voluptates eos et laudantium rerum enim?</p>
                </div>
            </div>
        </div>
    );

}