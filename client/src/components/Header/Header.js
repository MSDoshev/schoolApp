import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <nav className={styles.main}>
        <p className={styles.logo}>
           <Link to="/">SchoolApp</Link> 
        </p>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};
