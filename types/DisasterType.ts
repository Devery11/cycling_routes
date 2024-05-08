import {DisasterData} from "./disasterData";

export type DisasterType = {
    "data": DisasterData[],
    "object": string,
    "totalResults": number,
    "hasMore": true,
    "page": number
};
