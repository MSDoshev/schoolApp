import { Link } from "react-router-dom";
import styles from "./Header.module.css"
export const Header = () => {

    return(
  
        <header className={styles.main}>
            <nav >
                <ul className={styles.navLinks}>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to="/create" >Create</Link></li>
                    <li><Link to="/about" >Gallery</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/about" >Login</Link></li>
                    <li><Link to="/about" >Register</Link></li>
                    <li><Link to="/about" >Logout</Link></li>
                </ul>
            </nav>
        </header>
   
    );
} 