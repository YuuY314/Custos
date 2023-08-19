import {Link} from "react-router-dom";
import Container from "./Container";
import styles from "./modules/Navbar.module.css";
import logo from "../../img/logo.png";

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Custos"/>
                </Link>
                <ul className={styles.list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                    <li><Link to="/company">Sobre</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;