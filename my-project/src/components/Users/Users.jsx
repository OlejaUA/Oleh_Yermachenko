import React from "react";
import Pagination from "../common/Paginator/Pagination";
import User from "./User";

let Users = ({ currentPage, onPageChanged, itemTotalCount, pageSize, users, ...props }) => {
	return (
		<div>
	
			{users.map((users) => (
				<User
					user={users}
					key={users.id}
					followingInProgress={props.followingInProgress}
					follow={props.follow}
					unfollow={props.unfollow}
				/>
			))}
			<div>
				<Pagination
					currentPage={currentPage}
					onPageChanged={onPageChanged}
					itemTotalCount={itemTotalCount}
					pageSize={pageSize}
				/>
			</div>
		</div>
	);
};

export default Users;
