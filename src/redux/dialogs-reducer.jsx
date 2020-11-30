const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Annusshka'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Jeka'},
        {id: 4, name: 'Valeriy'},
        {id: 5, name: 'VaelriyJr'}
    ],
    messages: [
        {id: 1, message: 'Hellllooooooo!How are you, Govnocoder????'},
        {id: 2, message: 'welcome to programming hell'},
        {id: 3, message: 'Hellllooooooo! Пастрыжыся'},
        {id: 4, message: 'мама мийа, вот это говнокодер'},
        {id: 5, message: 'hellllll'}
    ],
    newMessageText: ""
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText: action.newMessage
            };
            // let stateCopy = {...state};
            // stateCopy.newMessageText = action.newMessage;
            // return stateCopy;

        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: newMessage}]
            // let stateCopy = {...state};
            // stateCopy.messages = [...state.messages];
            //
            // let newMessage = state.newMessageText;
            // stateCopy.newMessageText = '';
            // stateCopy.messages.push({id: 6, message: newMessage});
            // return stateCopy;
        }
        default:
            return state;
    }
};
export const updateNewMessageCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessage: newMessage});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogReducer;

// const dialogReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case UPDATE_NEW_MESSAGE_BODY:
//             let stateCopy = {...state};
//             stateCopy.newMessageText = action.newMessage;
//             return stateCopy;
//
//         case SEND_MESSAGE: {
//             let stateCopy = {...state};
//             stateCopy.messages = [...state.messages];
//
//             let newMessage = state.newMessageText;
//             stateCopy.newMessageText = '';
//             stateCopy.messages.push({id: 6, message: newMessage});
//             return stateCopy;
//         }
//         default:
//             return state;
//     }
// }