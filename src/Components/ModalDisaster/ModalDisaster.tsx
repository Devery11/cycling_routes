import React, {memo, useContext, useEffect, useRef} from "react";
import { ModalContext } from "../../Contexts/ModalContext";
import {MapComponent} from "../MapComponent/MapComponent"

type Props = {
    handleClose: () => void;
};

export const ModalDisaster:React.FC<Props> = memo(({ handleClose }) => {
    const disaster = useContext(ModalContext);

    const isFirstRender = useRef(true);

    useEffect(() => {
        isFirstRender.current = false;
    }, []);

    console.log(disaster)

    // @ts-ignore
    return (
        <>
            <div className="modal" onClick={handleClose} />
            <div className="modal__content">
                <h1 className="modal__title">{disaster?.properties.title}</h1>
                <div className="close-icon" onClick={handleClose} />
                <div className="route-modal">
                    <div className="route-modal__carusel">
                        <MapComponent />
                    </div>
                    <div className="route-modal__description">
                        <table>
                            <tbody>
                            <tr>
                                <td>Code:</td>
                                <td>{disaster?.properties.code}</td>
                            </tr>
                            <tr>
                                <td>Magnitude:</td>
                                <td>
                                    {
                                        // @ts-ignore
                                        (disaster?.properties.mag)?.toFixed(1) + disaster?.properties.magType
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Long/Lat:</td>
                                <td>
                                    {(Number(disaster?.geometry.coordinates[0])).toFixed(2) + ' / ' + (Number(disaster?.geometry.coordinates[1])).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>Time:</td>
                                <td>
                                    {new Date(disaster?.properties.time ?? 0).toString()}
                                </td>
                            </tr>
                            <tr>
                                <td>Gap:</td>
                                <td>
                                    {disaster?.properties.gap ?? 0}
                                </td>
                            </tr>
                            <tr>
                                <td>Url:</td>
                                <td>
                                    <a
                                        href={disaster?.properties.url}
                                        target="_blank"
                                    >
                                        {disaster?.properties.url}
                                    </a>
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
