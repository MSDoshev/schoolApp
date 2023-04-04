import styles from "./Header.module.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const {isAuthenticated, userEmail, userRole} = useContext(AuthContext);
  return (
    <nav className={styles.main}>
        <p className={styles.logo}>
           <Link to="/">SchoolApp</Link> 
        </p>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/about">About</Link></li>
        {isAuthenticated && (
          <>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
          )}
          {!isAuthenticated &&(
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        
      </ul>
    </nav>
  );
};
