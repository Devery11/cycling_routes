import React from "react";
import chroma from "chroma-js";
import {DisasterData} from "../../../types/disasterData";

type Props = {
    disaster: DisasterData;
    setSelectedRoute: React.Dispatch<React.SetStateAction<DisasterData | null>>;
};

export const Disaster: React.FC<Props> = ({disaster, setSelectedRoute}) => (
    <div
        className="recommended__link"
        onClick={() => setSelectedRoute(disaster)}
    >
        <article className="product recommended__product">
            <iframe
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-l-embassy+${
                    chroma(disaster.alertlevel.toLowerCase()).hex().replace('#', '')
                }(${
                    disaster.latlong[1]},${disaster.latlong[0]
                })/${
                    disaster.latlong[1]},${disaster.latlong[0]
                },15.25,0,60/324x216?access_token=pk.eyJ1IjoiZGV2ZXJ5IiwiYSI6ImNsdnZnc2FkYzFxNHAya3F6bmZxZzl3MjUifQ.W5wvpjd5aC-9xaEkHSh6nA`}
                className="product__photo"
            />

            <p className="product__title">{disaster.title}</p>
        </article>
    </div>
);
