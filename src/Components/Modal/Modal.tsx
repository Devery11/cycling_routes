import React, {useContext, useState} from "react";
import {RouteModal} from "../RouteModal/RouteModal";
import {ModalContext} from "../../Contexts/ModalContext";
import {MapComponent} from "../MapComponent/MapComponent"

type Props = {
    handleClose: () => void;
};

export const Modal:React.FC<Props> = ({ handleClose }) => {
    const route = useContext(ModalContext);
    const [isShowingMap, setIsShowingMap] = useState(false);

    return (
        <>
            <div className="modal" />
            <div className="modal__content">
                <h1 className="modal__title">{route?.title}</h1>
                <div className="close-icon" onClick={handleClose}/>
                {isShowingMap ? (
                    <div className="modal__map">
                        <MapComponent />
                    </div>
                ) : (
                    <RouteModal handleShowMap={() => setIsShowingMap(true)} />
                )}
            </div>
        </>
    );
}
