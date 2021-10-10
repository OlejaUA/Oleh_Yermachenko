import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../Redux-Forms/Forms";
import { alphaNumeric, maxLength, minLength, required } from "../../../Utilites/Validator/Validator";
import style from "./myPosts.module.css";
import Post from "./post/Post";

const MyPosts = React.memo((props) => {
	let postElements = [...props.postData]
		.reverse()
		.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};
	let addNewPost = (values) => props.addPost(values.addNewPostBody);
	return (
		<div className={style.MyPosts}>
			<div className={style.Post}></div>
			<AddNewPostFormRedux onSubmit={addNewPost} />
			<div className={style.posts}>{postElements}</div>
		</div>
	);
});

export const maxLength15 = maxLength(15);
export const minLength2 = minLength(2);

const AddNewPostForm = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className={style.Textarea}>
				<Field
					component={Textarea}
					name="addNewPostBody"
					placeholder="New Post"
					validate={[required, maxLength15, minLength2]}
					warn={alphaNumeric}
				/>
			</div>
			<div className={style.button}>
				<button>add</button>
			</div>
		</form>
	);
};
const AddNewPostFormRedux = reduxForm({ form: "newPostForm" })(AddNewPostForm);

export default MyPosts;
