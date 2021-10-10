import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Redux-Forms/Forms";
import DialogItem from "./dialogItem/dialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ dialogsPage, sendMessage }) => {
	let state = dialogsPage;

	let dialogsElement = state.dialogsData.map((dialog) => (
		<DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id} />
	));
	let messagesElement = state.messagesData.map((messages) => <Message message={messages.message} id={messages.id} />);
	let newMessageBody = state.newMessageBody;

	let addNewMessage = (values) => {
		sendMessage(values.newMessageBody);
	};

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>{dialogsElement}</div>
			<div className={style.message}>
				<div> {messagesElement} </div>
			</div>
			<AddMessageFormRedux onSubmit={addNewMessage} />
		</div>
	);
};
const AddMessageForm = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field
					component={Textarea}
					name="newMessageBody"
					placeholder="Enter message"
					label="Enter your message"
				/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
export default Dialogs;
