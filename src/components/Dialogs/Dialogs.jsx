import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import dial from './Dialogs.module.css';

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElements = state.messages.map((message) => <Message message={message.message}/>)

    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.SendMessageClick();
    }
    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.NewMessageChange(newMessage);
    }

    return (
        <div className={dial.dialogs}>
            <div className={dial.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dial.messages}>
                <div>{messageElements}</div>

                <div>
                    <textarea value={ newMessageText }
                              onChange={ onNewMessageChange }
                              placeholder={'введите сообщение'}>
                     </textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }> send message</button>
                </div>

            </div>
        </div>
    )
};

export default Dialogs;