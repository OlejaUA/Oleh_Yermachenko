import React, { useState } from "react";
import userPhoto from "../../../assets/imagies/avatar.png";
import ProfileDataFormRedux from "../../../Redux-Forms/ProfileDataForm";
import Preloader from "../../common/preloader/preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
	let [editMode, setEditMode] = useState(false);
	if (!profile) {
		return <Preloader />;
	}
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};

	const onSubmit = (formData) => {
		saveProfile(formData).then(() => {
			setEditMode(false);
		});
	};

	return (
		<div className={style.discriptionBlock}>
			<div>
				<div className={style.ProfileStatusWithHooks}>
					<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
				</div>
				<img src={profile.photos.large || userPhoto} className={style.mainPhoto} />
				<div className={style.download}>
					{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				</div>
				<div className={style.info}>
					{editMode ? (
						<ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit} />
					) : (
						<ProfileData
							goToEditMode={() => {
								setEditMode(true);
							}}
							profile={profile}
							isOwner={isOwner}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div>
			{isOwner && (
				<div>
					<button onClick={goToEditMode}>Edit Contacts</button>
				</div>
			)}
			<div>
				<b>My name : </b>
				{profile.fullName}
			</div>
			<div>
				<b>Looking for a job : </b>
				{profile.lookingForAJob ? "yes" : "no"}
			</div>
			<div>
				{profile.lookingForAJob && (
					<div>
						<b>My professional skils : </b>
						{profile.lookingForAJobDescription}
					</div>
				)}
			</div>
			<div>
				<b>About Me : </b>
				{profile.aboutMe}
			</div>
			<div>
				<b>Contacts :</b>
				<div className={style.contact}>
					{Object.keys(profile.contacts).map((key) => {
						return <Contact key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />;
					})}
				</div>
			</div>
		</div>
	);
};
const Contact = ({ contactsTitle, contactsValue }) => {
	return (
		<div>
			{contactsTitle} : {contactsValue}
		</div>
	);
};

export default ProfileInfo;
