import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name="Ollie"
            message="OMG!! So cute!!"
            timestamp="3 minutes ago"
            profilePic="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
             <Chat 
            name="Finn"
            message="OMG!! So cute!!"
            timestamp="30 minutes ago"
            profilePic="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
             <Chat 
            name="Bonnie"
            message="OMG!! So cute!!"
            timestamp="12 minutes ago"
            profilePic="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
             <Chat 
            name="Gunner"
            message="OMG!! So cute!!"
            timestamp="7 minutes ago"
            profilePic="
            https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
            "
            />
             <Chat 
            name="Charlie"
            message="OMG!! So cute!!"
            timestamp="9 minutes ago"
            profilePic="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
        </div>
    )
}

export default Chats
