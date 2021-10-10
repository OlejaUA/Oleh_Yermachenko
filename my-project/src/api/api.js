import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "2cfeb955-6bf5-405a-b0b6-02ad0a3b9e24",
	},
});

export const usersAPI = {
	getUser(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage} &count=${pageSize}`).then((response) => {
			return response.data;
		});
	},
	getAuth() {
		return instance.get(`auth/me`).then((response) => {
			return response.data;
		});
	},
	unfollow(usersId) {
		return instance.delete(`follow/${usersId}`);
	},
	follow(usersId) {
		return instance.post(`follow/${usersId}`);
	},
	getProfile(userId) {
		console.warn("Obsolete methot. Please use profileAPI object.");
		return profileAPI.getProfile(userId);
	},
};
export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status) {
		return instance.put(`profile/status/`, { status: status });
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);

		return instance.put(`profile/photo`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile);
	},
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},

	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha });
	},

	logout() {
		return instance.delete(`auth/login`);
	},
};
export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`);
	},
};
