import React, {FC, useState} from "react";
import {CardType} from "../../constans/CardType";
import './card.scss'
import ManPhotoUrl from '../../assets/images/man.png'
import CarPhotoUrl from '../../assets/images/car.png'
import CarNumberUrl from '../../assets/images/carNumber.png'
import QRCodeUrl from '../../assets/images/qr.png'
import {ReactComponent as QrIcon} from '../../assets/icons/qr.svg'
import {ReactComponent as CarIcon} from '../../assets/icons/car.svg'
import {ReactComponent as UserIcon} from '../../assets/icons/user.svg'
import {ReactComponent as WarningIcon} from '../../assets/icons/warning.svg'

type Props = {
    type: CardType
}
export const Card: FC<Props> = ({type}) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const getCardTitle = () => {
        if (type === CardType.Person) {
            return 'Personal data'
        }
        return 'Vehicle'
    }
    const getCardPhoto = () => {
        if (type === CardType.Person) {
            //@ts-ignore
            return <img src={ManPhotoUrl} alt=''/>
        }
        //@ts-ignore
        return <img src={CarPhotoUrl} alt=''/>
    }

    const getCardInfoTitle = () => {
        if (type === CardType.Person) {
            return 'ID number'
        }
        return 'VIN number'
    }

    const getCardIcon = () => {
        if (type === CardType.Person) {
            return <UserIcon/>
        }
        return <CarIcon/>
    }

    const renderBottomBlock = () => {
        if (type === CardType.Person) {
            return (
                <>
                    <div className="card-bottom-block-item">
                        <div>Phone number</div>
                        <div className='card-bottom-block-item-value'>+ 123 456 67 89</div>
                    </div>
                    <div className="card-bottom-block-item">
                        <div>Permit</div>
                        <div className='card-bottom-block-item-value'>129812</div>
                    </div>
                    <div className="card-bottom-block-item">
                        <div>Permit end date</div>
                        <div className='card-bottom-block-item-value'>12.05.2024</div>
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="card-bottom-block-item">
                    <div>Color</div>
                    <div className='card-bottom-block-item-value'>Grey</div>
                </div>
                <div className="card-bottom-block-item">
                    <div>Inspection</div>
                    <div className='card-bottom-block-item-value'>12.05.2024</div>
                </div>
            </>
        )
    }

    const renderCardHeader = () => {
        return (
            <div className="card-header">
                <div className="card-icon-container">
                    {getCardIcon()}
                </div>
                <div className="card-title">{getCardTitle()}</div>
                <button className={`card-flip-button ${isFlipped ? 'active' : ''}`} onClick={()=>setIsFlipped(!isFlipped)}><QrIcon/></button>
            </div>
        )
    }

    return (
        <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
            <div className='card-front'>
                {renderCardHeader()}
                <div className="card-body">
                    <div className="card-image-container">
                        {getCardPhoto()}
                    </div>
                    <div className="card-info">
                        <div className="card-info-title">
                            {type === CardType.Person ? 'Pavel Kolyuchin' : <div>Fuso <br/> Mamihna</div>}
                        </div>
                        <div className="card-info-subtitle">
                            {type === CardType.Person ?
                                <>
                                    <span>August 1, 1989</span>
                                    <div> (aged 31)</div>
                                </> :
                                <span>2003</span>
                            }
                        </div>
                        <div className="card-info-id-container">
                            <div className="card-info-id-title">{getCardInfoTitle()}</div>
                            <div className="card-info-id-value">00123456789012</div>
                        </div>
                        <div className="card-body-car-image-container">
                            {/*@ts-ignore*/}
                            {type === CardType.Vehicle && <img src={CarNumberUrl} alt=""/>}
                        </div>
                    </div>

                </div>
                <div className='card-warning-container'>
                    <div className='card-warning-icon-container'><WarningIcon/></div>
                    <div className='card-warning-text'>On you unpaid fines</div>
                    <div className="card-warning-counter">2</div>
                </div>
                <div className="card-bottom-block">
                    {renderBottomBlock()}
                </div>
            </div>
            <div className='card-back'>
                {renderCardHeader()}
                <div className="card-qr-container">
                    {/*@ts-ignore*/}
                    <img src={QRCodeUrl} alt=""/>
                </div>
            </div>
        </div>
    )
}
