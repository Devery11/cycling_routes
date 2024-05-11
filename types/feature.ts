export type Feature = {
    "geometry": {
        "coordinates": number[];
        "type": string;
    }
    "id": string;
    "properties": {
        "mag": number,
        "place": string,
        "time": number,
        "updated": number,
        "tz": any,
        "url": string,
        "detail": string,
        "felt": any,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": string,
        "tsunami": number,
        "sig": number,
        "net": string,
        "code": string,
        "ids": string,
        "sources": string,
        "types": string,
        "nst": number,
        "dmin": number,
        "rms": number,
        "gap": number,
        "magType": string,
        "type": string,
        "title": string
    };
    "type": string;
};
