import React from "react";

export const Header:React.FC = () => (
    <header className="header">
        <div className="container">
            <div className="header__content">
                <div className="top-bar">
                    <div className="top-bar__background"/>
                    <a href="#" className="top-bar__logo">
                        <img src="images/logo.svg" alt="Bang & Olufsen logo"/>
                    </a>

                    <div className="top-bar__icons">
                        <a href="tel:+1 234 5555-55-55" className="icon icon--phone"></a>

                        <a href="#" className="icon--phone--number">+1 234 555-55-55</a>

                        <a href="#menu" className="icon icon--menu"></a>
                    </div>
                </div>

                <div className="header__bottom">
                    <h1 className="header__title">
                        Be healthy.
                        <br/>
                        Be happy.
                    </h1>
                </div>
            </div>
        </div>
    </header>
);
