import {useEffect} from "react";
import './index.css'
import {useSelector} from "react-redux";
import ModalVideo from "react-modal-video";
import * as React from "react";

const Modal = ({ isVisible = false, onClose }) => {
    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    const videoId = useSelector(state => state.trailer)

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="" onClick={e => e.stopPropagation()}>
                <ModalVideo channel='youtube' autoplay isOpen={isVisible} videoId={videoId}  />
            </div>
        </div>
    );
};

export  default Modal;