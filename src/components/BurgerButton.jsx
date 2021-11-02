import '../styles/navbar.css';
import react from 'react';
import { Link } from 'react-router-dom';
import FaIcons from 'react-icons/fa';

export const BurgerButton = () => {
    function showSidebar(params) {
        console.log('menu button clicked - kd')
    }

    function handleBurgerClick(event) {
        var element = document.getElementById("hamburger-button");
        element.classList.add("is-active");
    }
    
    function myFunction() {
        var element = document.getElementById("myDIV");
        element.classList.add("mystyle");
      }

    return (
        //
        <button id="hamburger-button" class="hamburger hamburger--spin" type="button" onClick={(event) => {handleBurgerClick(event)}}>
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    )
}