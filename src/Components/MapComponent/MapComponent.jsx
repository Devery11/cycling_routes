import React, {useEffect, memo, useContext} from "react";
import mapboxGl from 'mapbox-gl';
import {ModalContext} from "../../Contexts/ModalContext";



export const MapComponent = memo(
    () => {
        const disaster = useContext(ModalContext);

        useEffect(() => {
            console.log(111111111)
            mapboxGl.accessToken = 'pk.eyJ1IjoiZGV2ZXJ5IiwiYSI6ImNsdnZnc2FkYzFxNHAya3F6bmZxZzl3MjUifQ.W5wvpjd5aC-9xaEkHSh6nA';
            const map = new mapboxGl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [disaster.latlong[1], disaster.latlong[0]],
                zoom: 9,
            });

            const marker = new mapboxGl.Marker({ type: 'point' }).setLngLat([disaster.latlong[1], disaster.latlong[0]]).addTo(map);
        }, []);





        return (
            <div id='map'></div>
        );
    }
);
