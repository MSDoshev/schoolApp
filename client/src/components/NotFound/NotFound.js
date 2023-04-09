import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
    </div>
  );
};
