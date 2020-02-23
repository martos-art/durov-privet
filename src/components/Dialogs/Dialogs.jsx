import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import dial from './Dialogs.module.css';

import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Annusshka' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Jeka' },
        { id: 4, name: 'Valeriy' },
        { id: 5, name: 'VaelriyJr' }
    ];
    let messages = [
        { id: 1, message: 'Hellllooooooo!How are you, Govnocoder????' },
        { id: 2, message: 'welcome to programming hell' },
        { id: 3, message: 'Hellllooooooo! Пастрыжыся' },
        { id: 4, message: 'мама мийа, вот это говнокодер' },
        { id: 5, message: 'hellllll' }
    ];
    let dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElements = messages.map((message) => <Message message={message.message} />)
    return (
        <div className={dial.dialogs} >
            <div className={dial.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dial.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;