const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 6, message: newMessage});
            return state;
    }
    return state;
}
export default dialogReducer;

// const dialogReducer = (state, action) => {
//
//     if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//         state.newMessageText = action.newMessage;
//
//     } else if (action.type === SEND_MESSAGE) {
//         let newMessage = state.newMessageText;
//         state.newMessageText = '';
//         state.messages.push({id: 6, message: newMessage});
//     }
//
//     return state;
// }
// export default dialogReducer;