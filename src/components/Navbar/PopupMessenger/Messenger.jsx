import React, {useState, useEffect, useContext} from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SearchIcon from '@mui/icons-material/Search';
import { MessengerContext } from "./store/MessengerPopupContext";
import './MessengerStyle.scss'
import CardMessenger from './CardMessenger';

const Messenger = () => {
    const [chats, setChats] = useState([])
    const datas = useContext(MessengerContext)

    useEffect(() => {
        setChats(datas)
    }, [])

    return (
            <div className='messenger'>
                <div className="messenger__title">
                    <div className="messenger__title-left">
                        <h2>Messenger</h2>
                    </div>
                    <div className="messenger__title-right">
                        <div className="messenger__title-right-icons"><MoreHorizIcon/></div>
                        <div className="messenger__title-right-icons"><ZoomOutMapIcon/></div>
                        <div className="messenger__title-right-icons"><VideoCallIcon /></div>
                        <div className="messenger__title-right-icons"><AddCommentIcon/></div>   
                    </div>
                </div>
                <div className="messenger__search">
                    <div className='messenger__search-icon'>
                        <SearchIcon />
                    </div>
                    <input className='messenger__search-input' type="text" placeholder='Tìm kiếm trên messenger...'/>
                </div>
                <div className="messenger__body">
                    {chats.map((chat) =>(
                        <CardMessenger 
                            key={chat.id}
                            id={chat.id}
                            picture={chat.picture}
                            name={chat.name}
                            lastchat={chat.lastChat}
                        />
                    ))}
                </div>  
            </div>
    )
}

export default Messenger
