import '../styles/navbar.css';
import react from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <span>
                <Link className='navbar_title' to="/">
                    ARUP
                </Link>
            </span>
            <span className="navbar_link">
                Menu
            </span>
        </nav>

    )
}