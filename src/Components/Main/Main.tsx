import React, {useCallback, useEffect, useState} from "react";
import { getDisasters } from "../../api/routes";
import {Disaster} from "../Disaster/Disaster";
import {ModalDisaster} from "../ModalDisaster/ModalDisaster";
import {ModalContext} from "../../Contexts/ModalContext";
import {DisasterType} from "../../../types/DisasterType";
import {Feature} from "../../../types/feature";
import {Audio} from "react-loader-spinner";
import classNames from "classnames";
import {Pagination} from "../Pagination/Pagination";
import {useDebounce} from "../../hooks/useDebounce";
import {FormFilters} from "../FormFilters/FormFilters";
import {Filters} from "../../../types/Filters";
import {BarChartMagnitude} from "../BarChartMagnitude/BarChartMagnitude";

export const Main:React.FC = () => {
    const [disastersFromServer, setDisastersFromServer] = useState<DisasterType | null>(null);
    const [disastersToDisplay, setDisastersToDisplay] = useState<Feature[] | null>(null);
    const [selectedDisaster, setSelectedDisaster] = useState<Feature | null>(null);
    const [page, setPage] = useState(1);
    const [errorMassage, setErrorMassage] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState<Filters>({});

    const debouncedSearchValue = useDebounce(searchValue);

    useEffect(() => {
        setDisastersToDisplay(disastersFromServer ?
            disastersFromServer.features
                .filter(feature => feature.properties.title
                .trim()
                .toLowerCase()
                .includes(debouncedSearchValue.trim().toLowerCase())) : []);
    }, [debouncedSearchValue]);

    useEffect(() => {
        setIsLoading(true);

        getDisasters(filters)
            .then((res) => {
                setDisastersFromServer(res);
                setDisastersToDisplay(res.features);
            })
            .catch(() => {
                setErrorMassage('Try again later')
            })
            .finally(() => setIsLoading(false));
    }, [page, filters]);

    return (
        <>
            <ModalContext.Provider
                value={selectedDisaster}
            >
                {selectedDisaster && (
                    <ModalDisaster handleClose={() => setSelectedDisaster(null)} />
                )}
            </ModalContext.Provider>
            <main className="main">
                <div className="main__content">
                    <div className="container">
                        <section className="recommended" id="recommended">
                            <h2 className="section-title">Disasters</h2>
                            <div className="recommended__search">
                                <input
                                    className="recommended__search-bar"
                                    value={searchValue}
                                    onChange={
                                        (event) => setSearchValue(event.target.value)
                                    }
                                    type="text"
                                    placeholder="Search title"
                                />
                                <div>
                                    <button
                                        className="button recommended__filters"
                                        onClick={() => setIsFilterModalOpen(prevState => !prevState)}
                                    >
                                        Filters
                                    </button>
                                    {isFilterModalOpen && (
                                        <div className="filters">
                                            <FormFilters onSubmit={setFilters}/>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {isLoading && <Audio wrapperClass="loader"/>}
                            <div className="recommended__products">
                                {
                                    disastersToDisplay &&
                                    !errorMassage &&
                                    disastersToDisplay
                                        .slice(24 * (page - 1), 24 * page)
                                        .map(feature => (
                                            <Disaster
                                                disaster={feature}
                                                setSelectedRoute={setSelectedDisaster}
                                                key={feature.id}
                                            />
                                        ))
                                }
                            </div>

                            <Pagination
                                page={page}
                                elementCount={disastersToDisplay ? disastersToDisplay.length : 0}
                                setPage={setPage}
                            />
                        </section>
                    </div>

                    <section>
                        <div className="container" >
                            {disastersToDisplay && <BarChartMagnitude disasters={disastersToDisplay.slice(24 * (page - 1), 24 * page)} />}
                        </div>
                    </section>

                    <section className="about-us" id="about-us">
                        <div className="about-us__photo"></div>

                        <div className="container">
                            <div className="about-us__content">
                                <h2 className="section-title about-us__title">Our website is your guide through natural
                                    disasters!</h2>

                                <p className="about-us__description">
                                    Our website offers in-depth analysis and up-to-date information on various natural
                                    disasters around the world. We strive to help our users stay informed and prepared
                                    for extreme situations by providing timely warnings, safety tips and survival
                                    strategies. Whether it's an earthquake, hurricane, flood or other disasters, our
                                    goal is to provide you with the knowledge you need to minimize damage and protect
                                    your life and property. Subscribe to our updates to stay one step ahead of nature!
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
                                           className="contact-us__link">example@disasters.com</a>
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
