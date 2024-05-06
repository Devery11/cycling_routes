import React, {useEffect, useState} from "react";
import {getRoutesFromServer} from "../../api/routes";
import {Route} from "../../../types/route";
import {RecommendedRoute} from "../RecommendedRoute/RecommendedRoute";
import {Modal} from "../Modal/Modal";
import {ModalContext} from "../../Contexts/ModalContext";

export const Main:React.FC = () => {
    const [routesFromServer, setRoutesFromServer] = useState<Route[]>([{
        title: '',
        description: '',
        imagesUrl: [],
    }]);

    const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

    useEffect(() => {
        getRoutesFromServer().then(setRoutesFromServer);
    }, []);

    return (
        <>
            <ModalContext.Provider
                value={selectedRoute}
            >
                {selectedRoute && (
                    <Modal handleClose={() => setSelectedRoute(null)} />
                )}
            </ModalContext.Provider>
            <main className="main">
                <div className="main__content">
                    <div className="container">
                        <section className="recommended" id="recommended">
                            <h2 className="section-title">Routes</h2>
                            <div className="recommended__products">
                                {routesFromServer.map(route => (
                                    <RecommendedRoute
                                        route={route}
                                        handleSetSelectedRoute={(newRoute: Route) => setSelectedRoute(newRoute)}
                                        key={route.title}
                                    />
                                ))}
                            </div>
                        </section>
                    </div>

                    <section className="about-us" id="about-us">
                        <div className="about-us__photo"></div>

                        <div className="container">
                            <div className="about-us__content">
                                <h2 className="section-title about-us__title">Timeless, for 50 years and counting</h2>

                                <p className="about-us__description">
                                    Bang & Olufsen is expanding its Recreated Classics Program with the launch of
                                    Beosystems – a limited edition music system that transcends time by bridging the gap
                                    between one of our iconic designs from 1972 and today’s cutting-edge digital
                                    technology.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="container">
                        <section className="contact-us" id="contact-us">
                            <h2 className="section-title">Contact Us</h2>

                            <form className="form">
                                <input
                                    type="text"
                                    name="name"
                                    id="form-name"
                                    className="form__input form__input--name form--input"
                                    placeholder="Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="form-email"
                                    className="form__input form__input--email form--input"
                                    placeholder="Email"
                                    required
                                />
                                <textarea
                                    name="message"
                                    id="form-message"
                                    className="form__textarea form__input--message form--input"
                                    placeholder="Message"
                                    required
                                ></textarea>
                                <button className="form__button button">Send</button>
                            </form>

                            <div className="contact-us__contacts">
                                <div className="contact-us__info">
                                    <p className="contact-us__title">Phone</p>

                                    <p className="contact-us__text">
                                        <a href="tel:+1 234 5555-55-55" className="contact-us__link">+1 234
                                            5555-55-55</a>
                                    </p>
                                </div>
                                <div className="contact-us__info">
                                    <p className="contact-us__title">Email</p>

                                    <p className="contact-us__text">
                                        <a href="mailto:hello@bang&olufsen.com"
                                           className="contact-us__link">hello@bang&olufsen.com</a>
                                    </p>
                                </div>
                                <div className="contact-us__info">
                                    <p className="contact-us__title">Address</p>

                                    <p className="contact-us__text">
                                        <a
                                            href="https://www.google.com/maps/place/400+N+1st+Ave+STE+700,+Minneapolis,+MN+55401,+%D0%A1%D0%A8%D0%90/@44.9813258,-93.275706,17z/data=!3m1!4b1!4m6!3m5!1s0x52b3328fdf233887:0x3348e5113ed2472d!8m2!3d44.9813258!4d-93.2731311!16s%2Fg%2F11nyn_tfyt?entry=ttu"
                                            className="contact-us__link"
                                            target="_blank"
                                        >
                                            400 first ave.
                                            <br/>
                                            suite 700
                                            <br/>
                                            Minneapolis, MN 55401
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};
