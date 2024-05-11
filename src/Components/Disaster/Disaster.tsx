import React from "react";
import chroma from "chroma-js";
import {Feature} from "../../../types/feature";

type Props = {
    disaster: Feature;
    setSelectedRoute: React.Dispatch<React.SetStateAction<Feature | null>>;
};

export const Disaster: React.FC<Props> = ({disaster, setSelectedRoute}) => (
    <div
        className="recommended__link"
        onClick={() => setSelectedRoute(disaster)}
    >
        <article className="product recommended__product">
            <img
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-l-embassy+fff(${
                    disaster.geometry.coordinates[0]},${
                    disaster.geometry.coordinates[1]
                })/${
                    disaster.geometry.coordinates[0]},${
                    disaster.geometry.coordinates[1]
                },10.25,0,60/324x216?access_token=pk.eyJ1IjoiZGV2ZXJ5IiwiYSI6ImNsdnZnc2FkYzFxNHAya3F6bmZxZzl3MjUifQ.W5wvpjd5aC-9xaEkHSh6nA`}
                className="product__photo"
            />

            <p className="product__title">{disaster.properties.title}</p>
        </article>
    </div>
);
