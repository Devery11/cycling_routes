import React from "react";

export const Menu:React.FC = () => (
    <aside className="menu page__menu" id="menu">
        <div className="container">
            <div className="top-bar menu__top">
                <a href="#" className="top-bar__logo">
                    <img src="../../styles/images/logo.png" alt="Disasters logo"/>
                </a>

                <a href="#" className="icon icon--close"></a>
            </div>

            <div className="menu__bottom">
                <nav className="nav menu__nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link" href="#recommended">Disasters</a>
                        </li>

                        <li className="nav__item">
                            <a className="nav__link" href="#about-us">About Us</a>
                        </li>

                        <li className="nav__item">
                            <a className="nav__link" href="#contact-us">Contact Us</a>
                        </li>
                    </ul>
                </nav>

                <a href="tel:+1 234 5555-55-55" className="menu__phone-number">
                    +1 234 5555-55-55
                </a>
            </div>
        </div>
    </aside>
);
