import React from "react";
import {ReactComponent as RepeatIcon} from '../../assets/icons/repeat.svg'
import './footer.scss'
export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-icon-container">
                <RepeatIcon/>
            </div>
            <div> Data updated March 24, 2023 at 0:56</div>
        </div>
    )
}
