import React from "react";
import { Field } from "redux-form";
import style from "./Forms.module.css";

export const Input = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
		<div className={style.error}>
			<input {...input} type={type} placeholder={label} />
			{touched && error && <span>{error}</span>}
		</div>
	</div>
);
export const Textarea = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
		<div>
			<textarea {...input} type={type} placeholder={label} />
			{touched && error && <span>{error}</span>}
		</div>
	</div>
);

export const createField = (placeholder, name, component, warn, validate, props = {}, text = "") => (
	<div>
		<Field
			placeholder={placeholder}
			name={name}
			component={component}
			warn={warn}
			validate={[validate]}
			{...props}
		/>
		{text}
	</div>
);
export const createFieldContact = (placeholder, name, component, props = {}, text = "") => (
	<div>
		<Field placeholder={placeholder} name={name} component={component} {...props} />
		{text}
	</div>
);
