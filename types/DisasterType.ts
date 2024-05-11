import {Feature} from "./feature";

export type DisasterType = {
    "bbox": number[],
    "features": Feature[],
    "metadata": {
        "generated": number,
        "url": string,
        "title": string,
        "status": number,
        "api": string,
        "limit": number,
        "offset": number,
        "count": number
    },
    "type": string,
};
