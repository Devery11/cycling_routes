import Slider from 'react-slick';
import React, {useContext, useState} from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Route} from "../../../types/route";
import {ModalContext} from "../../Contexts/ModalContext";

type Props = {
  handleShowMap: () => void;
};

export const RouteModal:React.FC<Props> = ({ handleShowMap }) => {
    const route  = useContext(ModalContext);

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />,
        adaptiveHeight: true,
    };
    return (
        <>
            <div className="route-modal">
                <div className="route-modal__carusel">
                    <Slider {...settings}>
                        {route?.imagesUrl.map((imageUrl, index) => (
                            <div
                                className="route-modal__image-container"
                                key={imageUrl}
                            >
                                <img
                                    src={imageUrl}
                                    alt={route.title + (index + 1)}
                                    className="route-modal__image"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="route-modal__description">
                    {route?.description}
                </div>
            </div>
            <button
                className="route-modal__button button"
                onClick={handleShowMap}
            >
                View map
            </button>
        </>
    );
}

const CustomArrow: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "black",
                borderRadius: "100%",
            }}
            onClick={onClick}
        />
    );
}
