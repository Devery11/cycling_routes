import React from "react";
import {Feature} from "../../types/feature";

export const ModalContext = React.createContext<Feature | null>(null);
