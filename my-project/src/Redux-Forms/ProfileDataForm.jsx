import React from "react";
import { reduxForm } from "redux-form";
import { createField, createFieldContact, Input, Textarea } from "./Forms";
import { required } from "./../Utilites/Validator/Validator";
import style from "../components/Content/ProfileInfo/ProfileInfo.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<button>Save</button>
			{error && <div className={style.validateError}>{error}</div>}
			<div>
				<b>My name : </b>
				{profile.fullName}
				{createField("Full name", "fullName", Input, null, required)}
			</div>
			<div>
				<b>Looking for a job : </b>
				{createField("", "lookingForAJob", Input, null, required, {
					type: "checkbox",
				})}
			</div>
			<div>
				<b>My professional skils : </b>
				{profile.lookingForAJobDescription}
				{createField("My professional skils ", "lookingForAJobDescription", Textarea, null, required)}
			</div>
			<div>
				<b>About Me : </b>
				{profile.aboutMe}
				{createField("About Me", "aboutMe", Input, null, required)}
			</div>
			<div>
				<b>Contacts :</b>
				<div>
					{Object.keys(profile.contacts).map((key) => {
						return (
							<div key={key} className={style.contact}>
								<b>
									{key} :{createFieldContact(key, "contacts." + key, Input)}
								</b>
							</div>
						);
					})}
				</div>
			</div>
		</form>
	);
};

const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(ProfileDataForm);
export default ProfileDataFormRedux;
