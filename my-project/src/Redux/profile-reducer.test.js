import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    postData: [{ id: 1, message: "first message", likesCount: 25 },
    { id: 2, message: "Second message", likesCount: 25 },
    { id: 3, message: "Third message", likesCount: 25 },
    { id: 4, message: "fourth message", likesCount: 25 }],
    newText: "",
  };

it("new post should be added", () => {
  // start data test
  

  let action = addPostActionCreator("New message");
  // action
  let newState = profileReducer(state, action);

  // expectation
  expect(newState.postData.length).toBe(5)
});

it("New message", () => {
  // start data test
  

  let action = addPostActionCreator("New message");
  // action
  let newState = profileReducer(state, action);

  // expectation
  expect(newState.postData[4].message).toBe("New message")
});


it("delete post", () => {
  // start data test
  
  let action = deletePost(1);
  // action
  let newState = profileReducer(state, action);

  // expectation
  //expect(newState.posts.length).toBe(3)
});
