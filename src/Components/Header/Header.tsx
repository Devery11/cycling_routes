import React from "react";

export const Header:React.FC = () => (
    <header className="header">
        <div className="top-bar__background"/>
        <div className="container">
            <div className="header__content">
                <div className="top-bar">
                    <a href="#" className="top-bar__logo">
                        <img src='' alt="Disaster logo"/>
                    </a>

                    <div className="top-bar__icons">
                        <a href="tel:+1 234 5555-55-55" className="icon icon--phone"></a>

                        <a href="#" className="icon--phone--number">+1 234 555-55-55</a>

                        <a href="#menu" className="icon icon--menu"></a>
                    </div>
                </div>

                <div className="header__bottom">
                    <h1 className="header__title">
                        Disasters
                        <br/>
                        Base
                    </h1>
                </div>
            </div>
        </div>
    </header>
);
