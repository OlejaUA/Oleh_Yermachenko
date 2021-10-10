import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router"
import {compose} from "redux"
import {
	getStatus,
	getUserProfile,
	setUserProfile,
	updateStatus,
	savePhoto,
	saveProfile,
} from "../../Redux/profile-reducer"
import Content from "./Content"
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js"

class ContentContainer extends React.Component {
	refreshProfile() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authorizesUserId
		}

		this.props.getUserProfile(userId)

		this.props.getStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return (
			<div>
				<Content
					{...this.props}
					isOwner={!this.props.match.params.userId}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateStatus}
					savePhoto={this.props.savePhoto}
					saveProfile={this.props.saveProfile}
				/>
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	updateStatus: state.profilePage.updateStatus,
	authorizesUserId: state.auth.userId,
	authMe: state.auth.authMe,
})

export default compose(
	connect(mapStateToProps, {
		setUserProfile,
		getUserProfile,
		getStatus,
		updateStatus,
		savePhoto,
		saveProfile,
	}),
	withRouter,
	withAuthRedirect
)(ContentContainer)
