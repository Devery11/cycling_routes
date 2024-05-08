import React, {memo, useContext, useEffect, useRef} from "react";
import { ModalContext } from "../../Contexts/ModalContext";
import {MapComponent} from "../MapComponent/MapComponent"

type Props = {
    handleClose: () => void;
};

export const Modal:React.FC<Props> = memo(({ handleClose }) => {
    const disaster = useContext(ModalContext);

    const isFirstRender = useRef(true);

    useEffect(() => {
        isFirstRender.current = false;
    }, []);

    console.log(isFirstRender)

    // @ts-ignore
    return (
        <>
            <div className="modal" />
            <div className="modal__content">
                <h1 className="modal__title">{disaster?.title}</h1>
                <div className="close-icon" onClick={handleClose} />
                <div className="route-modal">
                    <div className="route-modal__carusel">
                        {isFirstRender && (<MapComponent />)}
                    </div>
                    <div className="route-modal__description">
                        <table>
                            <tbody>
                            <tr>
                                <td>GDACS ID:</td>
                                <td>{disaster?.guid}</td>
                            </tr>
                            <tr>
                                <td>Magnitude:</td>
                                <td>
                                    {
                                        // @ts-ignore
                                        disaster?.magnitudeValue + disaster?.magnitudeUnit
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Lat/Long:</td>
                                <td>
                                    {(Number(disaster?.latlong[0])).toFixed(2) + ' / ' + (Number(disaster?.latlong[1])).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>Description: </td>
                                <td>
                                    {disaster?.description}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
})
