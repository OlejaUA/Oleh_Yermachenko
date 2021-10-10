import React from "react";

export const required = (value) => {
  if (value) return undefined;
  return "Поле обязательное для заполнения";
};

// export const required = value => value ? undefined : "required field"

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Максимум ${max} символов` : undefined;
export const minLength = (min) => (value) =>
  value && value.length < min ? `Минимум ${min} символов` : undefined;

export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
