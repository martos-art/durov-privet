import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (newMessage) => {
        props.store.dispatch(updateNewMessageCreator(newMessage));
    }
    return (
        <Dialogs SendMessageClick={onSendMessageClick}
                 NewMessageChange={onNewMessageChange}

                 dialogsPage={state}/>
    )
};
export default DialogsContainer;