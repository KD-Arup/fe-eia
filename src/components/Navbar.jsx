import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu';


export const Navbar = () => {

    return (
        <nav className="navbar">
            <span className="arup_logo_container">
                <Link className='navbar_title' to="/">
                    <div 
                    style={
                        {
                            "display": "grid",
                            "grid-template-rows": "auto 1fr",
                            "background-color": "#e61e28",
                            "border": "solid 1px #e61e28",
                            "align-content": "center",
                            "text-align": "center",
                            "padding": "4px 4px"
                        }
                    }>
                        <div
                        style={
                            {"height": "fit-content"}
                        }
                        >
                        <span
                        style={
                            {
                                "height": "fit-content",
                                "font-size": "12px",
                                "display": "inline",
                                "color": "#ffffff",
                                "letter-spacing": "4px",
                                "right-margin": "4px"
                            }
                        }>
                            DIGITA
                        </span>
                        <span
                        style={
                            {
                                "font-size": "12px",
                                "display": "inline",
                                "color": "#ffffff",
                            }
                        }>
                            L
                        </span> 
                        </div>
                        <div>
                        <span
                        style={
                            {
                                "display": "inline",
                                "color": "#ffffff",
                                "letter-spacing": "15px",
                                "right-margin": "15px"
                            }
                        }
                        >EI</span><span
                        style={
                            {
                                "display": "inline",
                                "color": "#ffffff",
                            }
                        }
                        >A</span></div>
                    </div>
                </Link>
            </span>
            <BurgerMenu />
        </nav>

    )
}