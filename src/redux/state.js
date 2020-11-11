let store = {
    _state: {

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
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log("state изменился!!!!");
    },
    addPost () {
        let newMessage = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.unshift(newMessage);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.state = store;