const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Oleg" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Tima" },
    { id: 4, name: "Daha" },
    { id: 5, name: "Kaminskiy" },
    { id: 6, name: "Dima" },
  ],
  messagesData: [
    { id: 1, message: "first message" },
    { id: 2, message: "Training" },
    { id: 3, message: "I learn react" },
    { id: 4, message: "Its no easy" },
    { id: 5, message: "But i dont give up" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      stateCopy = {
        ...state,

        messagesData: [...state.messagesData, { id: 8, message: body }],
      };
      return stateCopy;
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
