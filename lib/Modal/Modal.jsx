import React from 'react'
import './Modal.css'

function Modal({ 
    isOpen, 
    onClose, 
    title, 
    modalButtonText, 
    modalButtonClose, 
    modalBackgroundColor="#fff", 
    modalTextColor="#000", 
    modalBorderRadius="15", 
    modalBorderStyle="solid", 
    modalBorderWidth="1", 
    modalBorderColor="#000",
    modalButtonBackgroundColor="#fff", 
    modalButtonTextColor="#000",
    modalButtonRadius="5", 
    modalButtonBorderStyle="solid", 
    modalButtonBorderWidth="1",
    modalButtonBorderColor="000", 
    children }) {
    return (<div>
        {isOpen && <div className='darkBG'>
            <div className='centered'>
                <div className='modal'  style={{ background: modalBackgroundColor, borderRadius: modalBorderRadius + 'px', borderStyle: modalBorderStyle, borderWidth: modalBorderWidth + 'px', borderColor: modalBorderColor }}>
                    <div className='modalHeader' >
                        <h2 className='modalHeading' style={{ color: modalTextColor }}>{title}</h2>
                        <button className='closeButton' onClick={onClose} style={{ color: modalTextColor }}>x</button>
                    </div>
                    <div className='modalContent' style={{ color: modalTextColor }}>
                        {children}
                    </div>
                    <div className='modalActions' >
                        <button className='button' onClick={modalButtonClose} style={{ background: modalButtonBackgroundColor, color:modalButtonTextColor, borderRadius: modalButtonRadius + 'px', borderStyle: modalButtonBorderStyle, borderWidth: modalButtonBorderWidth + 'px', borderColor: modalButtonBorderColor }}>
                            {modalButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>}
    </div>
    )
}
export default Modal