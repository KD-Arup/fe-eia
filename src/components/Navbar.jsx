import '../styles/navbar.css';
import react from 'react';
import { link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className='navbar_title' to="/">
                Arup
            </Link>
        </nav>

    )
}