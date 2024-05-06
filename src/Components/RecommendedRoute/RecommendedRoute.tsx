import React from "react";
import {Route} from "../../../types/route";

type Props = {
    route: Route;
    handleSetSelectedRoute: (newRoute: Route) => void;
};

export const RecommendedRoute:React.FC<Props> = ({ route, handleSetSelectedRoute }) => (
    <div
        className="recommended__link"
        onClick={() => handleSetSelectedRoute(route) }
    >
        <article className="product recommended__product">
            <img
                src={route.imagesUrl[0]}
                alt={route.title}
                className="product__photo"
            />

            <p className="product__title">{route.title}</p>
        </article>
    </div>
);
