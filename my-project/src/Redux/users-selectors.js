export const getUsers = (state) => {
	return state.usersPage.users;
};

export const getPageSize = (state) => {
	return state.usersPage.pageSize;
};

export const getitemTotalCount = (state) => {
	return state.usersPage.itemTotalCount;
};
export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
};
