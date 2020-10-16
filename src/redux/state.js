let rerenderEntireTree = () => {

}

let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'where is my mind?', likesCount: 764 },
            { id: 2, message: 'wheeeeere is my mind?', likesCount: 1921 },
            { id: 4, message: 'wheeeeere is myyyyyyyyyyyyy miiiiiiiiiiiiind?', likesCount: 1337 }
        ],
        newPostText: ""
    },

    dialogsPage: {
        messages: [
            { id: 1, message: 'Hellllooooooo!How are you, Govnocoder????' },
            { id: 2, message: 'welcome to programming hell' },
            { id: 3, message: 'Hellllooooooo! Пастрыжыся' },
            { id: 4, message: 'мама мийа, вот это говнокодер' },
            { id: 5, message: 'hellllll' }
        ],
        dialogs: [
            { id: 1, name: 'Annusshka' },
            { id: 2, name: 'Dimych' },
            { id: 3, name: 'Jeka' },
            { id: 4, name: 'Valeriy' },
            { id: 5, name: 'VaelriyJr' }
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newMessage = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newMessage);
    state.profilePage.newPostText = "";
   rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;