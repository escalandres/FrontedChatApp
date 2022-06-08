import React from 'react';
import 'bulma/css/bulma.min.css'
import 'font-awesome/css/font-awesome.min.css';
import '../css/home.css';

function darkMode(){
    const darkModeInput = document.getElementById('darkModeInput');
    const darkModeLabel = document.getElementById('darkModeLabel');
    const darkModeSpan = document.getElementById('darkModeSpan');
    if(darkModeInput.checked===true){
        darkModeSpan.classList.add("dark-theme-span");
        darkModeSpan.classList.remove("light-them-span");
        darkModeLabel.classList.add("dark-theme-toggle");
        darkModeLabel.classList.remove("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', 'var(--body-bg-dark)'); //--body-bg-dark
        document.documentElement.style.setProperty('--section-color', 'var(--white)'); //--white
        document.documentElement.style.setProperty('--section-background-off', 'var(--body-bg-dark)'); //--body-bg-dark
        document.documentElement.style.setProperty('--section-background-white', 'var(--dt-darkest)'); //--dt-darkest
        
    }
    else{
        darkModeSpan.classList.remove("dark-theme-span");
        darkModeSpan.classList.add("light-them-span");
        darkModeLabel.classList.remove("dark-theme-toggle");
        darkModeLabel.classList.add("light-theme-toggle");
        document.documentElement.style.setProperty('--background-color', 'var(--bluish-purple)');
        document.documentElement.style.setProperty('--section-color', 'var(--not-quite-dark)'); //--not-quite-dark
        document.documentElement.style.setProperty('--section-background-off', 'var(--off-white)'); //--body-bg
        document.documentElement.style.setProperty('--section-background-white', 'var(--white)'); //--white
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
        $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
        });
    }
});

const Navbar = () => {
    return(
        <section id='navbar_section'>
            <nav id="nav-sec" className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand navbar__brand">
                    <a className="navbar-item nav-bar__logo__container" href="#">
                        <div className="navbar__logo"></div>
                        <p className="navbar__logo__text">Chat App</p>
                    </a>
                    <div className="theme__container__btn">
                        <label id="darkModeLabel" className="toggle-dark-mode light-theme-toggle s-cursor-pointer s-relative s-cross-center s-mr-1">
                            <input id="darkModeInput" className="toggle-input s-opacity-0" type="checkbox" onClick={darkMode}/>
                            <span id="darkModeSpan" className="slider light-theme-span dot s-absolute s-h-24px s-w-24px s-cursor-pointer s-shadow-bottom s-circle"></span>
                        </label>
                    </div>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                        <span id="pri" className="white-line" aria-hidden="true"></span>
                        <span id="pri" className="white-line" aria-hidden="true"></span>
                        <span id="pri" className="white-line" aria-hidden="true"></span>
                        
                    </a>
                </div>
                <div id="navMenu" className="navbar-menu navbar__menu">
                    <div className="navbar-start navbar__start">
                        <a className="navbar-item navbar__text" href="/">
                            Home
                        </a>
                        <a className="navbar-item navbar__text" href="descargar">
                            Descargar
                        </a>
                        <a className="navbar-item navbar__text" href="about">
                            About
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable drop">
                            <a className="navbar-link navbar__text">
                                More
                            </a>
                        </div>
                    </div>
                    <div id="navbar__end1" className="navbar-end navbar__end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {/* <a className="button navbar__login__btn" onClick={renderApp} href="login"> */}
                                <a className="button navbar__login__btn" href="login">
                                Iniciar sesion
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
} 

export default Navbar