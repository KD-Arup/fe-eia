import '../styles/navbar.css';

export const BurgerButton = () => {
    function handleBurgerClick(event) {
        var element = document.getElementById("hamburger-button");
        element.classList.add("is-active");
    }

    return (
        
        <button id="hamburger-button" class="hamburger hamburger--spin" type="button" onClick={(event) => {handleBurgerClick(event)}}>
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    )
}