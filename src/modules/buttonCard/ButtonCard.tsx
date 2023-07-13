import React from "react";
import './buttonCard.scss'
import BillUrl from '../../assets/images/bill.png'
import CarUrl from '../../assets/images/whiteCar.png'
import {ReactComponent as RepeatIcon} from '../../assets/icons/repeat.svg'
import {ReactComponent as PlusIcon} from '../../assets/icons/plus.svg'


export const ButtonCard = ({swap = false}: { swap: boolean }) => {
    return (
        <div className={`button-card-container ${swap ? 'swap' : ''}`}>
            <div className="button-card-header-wrapper">
               <div>
                   <div className="button-card-header">
                       Add Document
                   </div>
                   <div className="button-card-subtitle">
                       Swap the documents in places, you can change the documents in any order in which it is convenient for you to look
                   </div>
               </div>
                <button className='button-card-button'>
                    {swap ? <RepeatIcon/> : <PlusIcon/>}
                </button>
            </div>
            <div className="button-card-image-container">
                {/*@ts-ignore*/}
                <img src={swap? CarUrl : BillUrl} alt=""/>
            </div>
        </div>
    )
}
