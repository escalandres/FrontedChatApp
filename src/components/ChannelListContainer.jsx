import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import Dropzone from './Dropzone';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ChatIcon from '../assets/chatLogo.png';
import LogoutIcon from '../assets/logout.png';
import '../css/theme1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import { Button, ButtonToolbar, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { GearFill } from 'react-bootstrap-icons';
// import { faUser } from '@fortawesome/free-brands-svg-icons';
import Moda from './Moda';
const cookies = new Cookies();

function settings(){
    return <Moda />
}

function darkMode(){
    const darkModeInput = document.getElementById('darkModeInput');
    const darkModeLabel = document.getElementById('darkModeLabel');
    const darkModeSpan = document.getElementById('darkModeSpan');
    if(darkModeInput.checked===true){
        darkModeSpan.classList.add("dark-theme-span");
        darkModeSpan.classList.remove("light-them-span");
        darkModeLabel.classList.add("dark-theme-toggle");
        darkModeLabel.classList.remove("light-theme-toggle");
        document.documentElement.style.setProperty('--primary-color', 'var(--dt-darkest)'); //--body-bg-dark
        document.documentElement.style.setProperty('--second-primary-color', 'var(--body-bg-dark)'); //--white
        document.documentElement.style.setProperty('--team-channel-header-name', 'var(--white)'); //--body-bg-dark
        document.documentElement.style.setProperty('--message-color', 'var(--grey-message)'); //--dt-darkest
        document.documentElement.style.setProperty('--input-message-color', 'var(--darkest-grey)'); //--dt-darkest
        document.documentElement.style.setProperty('--edit-channel', 'var(--not-quite-dark)'); //--dt-darkest

    }
    else{
        darkModeSpan.classList.remove("dark-theme-span");
        darkModeSpan.classList.add("light-them-span");
        darkModeLabel.classList.remove("dark-theme-toggle");
        darkModeLabel.classList.add("light-theme-toggle");
        document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-1)');
        document.documentElement.style.setProperty('--second-primary-color', 'var(--white)'); //--not-quite-dark
        document.documentElement.style.setProperty('--team-channel-header-name', 'var(--dark-grey)'); //--body-bg
        document.documentElement.style.setProperty('--message-color', 'var(--black)'); //--white
        document.documentElement.style.setProperty('--input-message-color', 'var(--ligther-grey)'); //--dt-darkest
        document.documentElement.style.setProperty('--edit-channel', 'var(--not-quite-white)'); //--dt-darkest

    }
    
}

const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={ChatIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
        <div className="theme__container__btn1">
            <label id="darkModeLabel" className="toggle-dark-mode light-theme-toggle s-cursor-pointer s-relative s-cross-center s-mr-1">
                <input id="darkModeInput" className="toggle-input s-opacity-0" type="checkbox" onClick={darkMode}/>
                <span id="darkModeSpan" className="slider light-theme-span dot s-absolute s-h-24px s-w-24px s-cursor-pointer s-shadow-bottom s-circle"></span>
            </label>
        </div>
        <ButtonToolbar  className="gear-btn">
            <ButtonGroup>
                <Button>
                    <GearFill className="gear-icon"/>
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
        {/* <div className="icon-container" onClick={settings}>
        <FontAwesomeIcon icon={faUser} className="fa-solid setting-icon"/> */}

            
            {/* <FontAwesomeIcon icon="fa-gear" className="fa-solid setting-icon"/> */}
        {/* </div> */}
        <div className="icon-container">
            
            <a href='update-photo' >
                <FontAwesomeIcon icon={faUser} className="fa-solid setting-icon"/>
            </a>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Chat App</p>
    </div>
)

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <SideBar logout={logout} />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="team"
                        />
                    )}
                />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                />
                
            </div>
        </>
    );
}

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className="channel-list__container">
              <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing} 
              />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing}
                setToggleContainer={setToggleContainer}
              />
            </div>
        </>
    )

}

export default ChannelListContainer;
