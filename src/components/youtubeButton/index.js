import * as React from "react";
import Modal from "../playerModal";
import {useState} from "react";

function YoutubeBtn(props) {

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <svg onClick={()=> setOpen(true)}
                 fill="none"
                 stroke="currentColor"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 viewBox="0 0 24 24"
                 height="50px"
                 width="70px"
                 {...props}
                 className={'youtube-btn'}
            >
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
            </svg>
            <Modal
                isVisible={isOpen}
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default YoutubeBtn;

