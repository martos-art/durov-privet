import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        SendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        NewMessageChange: (newMessage) => {
            dispatch(updateNewMessageCreator(newMessage))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage;
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onNewMessageChange = (newMessage) => {
//                     store.dispatch(updateNewMessageCreator(newMessage));
//                 }
//                 return (
//                     <Dialogs SendMessageClick={onSendMessageClick}
//                              NewMessageChange={onNewMessageChange}
//                              dialogsPage={state}/>
//                 )
//             }
//             }
//         </ StoreContext.Consumer>
//     )
// };
// export default DialogsContainer;