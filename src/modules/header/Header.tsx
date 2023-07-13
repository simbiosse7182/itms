import "./header.scss"
import {ReactComponent as Logo} from '../../assets/icons/logo.svg'
import {ReactComponent as Notification} from '../../assets/icons/notification.svg'
import {Tabs} from "./components/Tabs";
import {Fines} from "./components/Fines";
import avatarUrl from '../../assets/images/avatar.png'
export const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="header-container">
                <div className="header-block">
                    <div className="header-logo-container">
                        <Logo/>
                    </div>
                    <Tabs/>
                </div>
                <div className="header-block">
                    <Fines/>
                    <div className="header-notification-icon-container">
                        <Notification/>
                    </div>
                    <div className="header-avatar-container">
                        {/* @ts-ignore */}
                        <img src={avatarUrl} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

