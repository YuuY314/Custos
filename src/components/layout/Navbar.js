import {Link} from "react-router-dom";
import Container from "./Container";
import styles from "./modules/Navbar.module.css";
import logo from "../../img/logo.png";

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/Custos/"><img src={logo} alt="Custos"/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/Custos/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                    <li className={styles.item}><Link to="/company">Sobre</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;