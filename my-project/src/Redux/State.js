// import dialogsReducer from "./dialog-reducer";
// import profileReducer from "./profile-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
// const SEND_MESSAGE = 'SEND_MESSAGE';

// let store = {
//   _state: {
//     profilePage: {
//       postData: [
//         { id: 1, message: "first message", likesCount: 25 },
//         { id: 2, message: "Training", likesCount: 43 },
//         { id: 3, message: "Next Lesson", likesCount: 3 },
//         { id: 4, message: "So hard", likesCount: 1 },
//         { id: 5, message: "I dont give up", likesCount: 991 },
//       ],
//       newText: "",
//     },
//     dialogsPage: {

//       dialogsData: [
//         { id: 1, name: "Oleg" },
//         { id: 2, name: "Alex" },
//         { id: 3, name: "Tima" },
//         { id: 4, name: "Daha" },
//         { id: 5, name: "Kaminskiy" },
//         { id: 6, name: "Dima" },
//       ],
//       messagesData: [
//         { id: 1, message: "first message" },
//         { id: 2, message: "Training" },
//         { id: 3, message: "I learn react" },
//         { id: 4, message: "Its no easy" },
//         { id: 5, message: "But i dont give up" },
//       ],
//       newMessageBody: ""
//     },
//   },
//   _callSubscriber() {
//     console.log(`change`)
//   },


//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this.callSubscriber = observer;
//   },


//   dispatch(action) {

// this._state.profilePage = profileReducer(this._state.profilePage, action);
// this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

// this.callSubscriber(this._state);
    
//   }
// };






// export default store;
