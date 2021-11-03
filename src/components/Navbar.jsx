import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu';


export const Navbar = () => {

    return (
        <nav className="navbar">
            <span className="arup_logo_container">
                <Link className='navbar_title' to="/">
                    ARUP
                </Link>
            </span>
            <BurgerMenu />
        </nav>

    )
}