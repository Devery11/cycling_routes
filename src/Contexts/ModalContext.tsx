import React from "react";
import {Route} from "../../types/route";

export const ModalContext = React.createContext<Route | null>(null);
