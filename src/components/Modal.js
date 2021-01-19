import React, { useEffect } from 'react';


const Modal = ({modalClose, lageImg}) => {
    useEffect(() => {
        window.addEventListener('keydown', onEscClose)
        return (() => window.removeEventListener('keydown', onEscClose))
    });


    const onEscClose = (e) => {
        e.code === 'Escape' && modalClose()
        
    }

    return (
        <div className="Overlay">
            <div className="Modal">
                <img src={lageImg} alt="" className="modalIMG" />
               
            </div>
        </div>
        
    )
};

export default Modal