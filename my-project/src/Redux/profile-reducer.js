import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SAVE_PROFILE = "SAVE_PROFILE";

let initialState = {
	postData: [{ id: 1, message: "first message", likesCount: 25 }],
	newText: "",
	profile: null,
	status: "",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.addNewPostBody,
				likesCount: 0,
			};
			return {
				...state,
				postData: [...state.postData, newPost],
				newPostText: "",
			};
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile };
		}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			};
		case SET_STATUS:
			return {
				...state,
				status: action.status,
				newPostText: "",
			};
		case DELETE_POST:
			return {
				...state,
				postData: state.postData.filter((post) => post.id != action.postId),
			};
		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			};

		case SAVE_PROFILE:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			};
		default:
			return state;
	}
};

export const addPostActionCreator = (addNewPostBody) => ({
	type: ADD_POST,
	addNewPostBody,
});
export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});

export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});
export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});
export const deletePost = (postId) => ({
	type: DELETE_POST,
	postId,
});
export const savePhotoSuccess = (photos) => ({
	type: SAVE_PHOTO_SUCCESS,
	photos,
});
export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) dispatch(setStatus(status));
};
export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};

export const saveProfile = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.userId;
	const response = await profileAPI.saveProfile(profile);

	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userId));
	} else {
		//let message = response.data.messages.length > 0 ? response.data.messages[0] : "unknown error";
		dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
		return Promise.reject(response.data.messages[0]);
	}
};

export default profileReducer;
