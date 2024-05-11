import React, {useEffect, memo, useContext, useRef} from "react";
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import {ModalContext} from "../../Contexts/ModalContext";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";



export const MapComponent = memo(
    () => {
        const disaster = useContext(ModalContext);
        const mapDiv = useRef();
        const map = useRef();
        const mapView = useRef();
        const graphicLayer = useRef();
        const pointGraphic = useRef();

        useEffect(() => {
            map.current = new Map({
               basemap: 'streets-vector',
            });

            mapView.current = new MapView({
                map: map.current,
                center: [Math.round(disaster.geometry.coordinates[0]), Math.round(disaster.geometry.coordinates[1])],
                zoom: 10,
            });

            graphicLayer.current = new GraphicsLayer();
            map.current.add(graphicLayer);

            pointGraphic.current = new Graphic({
                geometry: {
                    type: "point",
                    longitude: Math.round(disaster.geometry.coordinates[0]),
                    latitude: Math.round(disaster.geometry.coordinates[1]),
                },
                symbol: {
                    type: "simple-marker",
                    color: [226, 119, 40],  // Orange
                    outline: {
                        color: [255, 255, 255], // White
                        width: 1
                    }
                },
            });

            graphicLayer.current.add(pointGraphic);

            mapView.current.container = mapDiv.current;
        }, []);





        return (
            <div
                className="modal__map"
                ref={mapDiv}
                style={{
                    height: '50vh',
                    width: '70vh',
                }}
            >
            </div>
        );
    }
);
