import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom/client";

import { ArcgisMap } from "@arcgis/map-components-react";

// import defineCustomElements to register custom elements with the custom elements registry
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import esriConfig from "@arcgis/core/config";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export const MapComponent = () => {
    esriConfig.apiKey = "AAPK4688e2aefb6747c2803905c321a33620SFRYEb7Rkv05a0ukbh6n59t1BQV4k64GHXO42S_PajXiuORlP_4ORs680xI7MLf5";

    const mapDiv = useRef();
    const map = useRef();
    const mapView = useRef();

    useEffect(() => {
        // @ts-ignore
        map.current = new Map({
            basemap: 'streets-vector'
        });

        mapView.current = new MapView({
            map: map,
        })

        mapView.current.container = mapDiv.current
    }, []);




    return (
        <div className="map" ref={mapDiv} style={{ height: '100%', width: '100%'}}></div>
    );
};
