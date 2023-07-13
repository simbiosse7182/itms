import React from "react";
import {ReactComponent as FinesIcon} from "../../../assets/icons/fines.svg";

export const Fines = () => {
    return (
        <div className='fines-container'>
            <div className="fines-icon-container">
                <FinesIcon/>
            </div>
            <div className='fines-info-container'>
                <div className="fines-title">
                    Fines and debts
                </div>
                <div className="fines-value">
                    40 000 000<span className='half-opacity'>,00</span>
                </div>
            </div>
        </div>
    )
}
