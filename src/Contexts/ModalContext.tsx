import React from "react";
import {DisasterData} from "../../types/disasterData";

export const ModalContext = React.createContext<DisasterData | null>(null);
