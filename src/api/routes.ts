import {Filters} from "../../types/Filters";

const API_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

export async function getDisasters(query?: Filters) {
    const urlSearchParams = new URLSearchParams(query);
    console.log(query);
    console.log(urlSearchParams)
    const response = await fetch(API_URL + '&' + urlSearchParams);

    return response.json();
}
