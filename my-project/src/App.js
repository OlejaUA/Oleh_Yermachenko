import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/preloader/preloader";
import ContentContainer from "./components/Content/ContentContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/login";
// import Music from "./components/Music/Music";
// import News from "./components/News/News";
// import Setting from "./components/Setting/Setting";
import SideBar from "./components/SideBar/SideBar";
import UsersContainer from "./components/Users/UsersContainer";
import { withSuspense } from "./hoc/withSuspense";
import { initializeApp } from "./Redux/app-reducer";

const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Setting = React.lazy(() => import("./components/Setting/Setting"));
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <SideBar />
        <div className="app-wrapper-content">
          <Route
            path="/messages"
            render={() => <DialogsContainer store={this.props.store} />}
          />
          <Route
            path="/profile/:userId?"
            render={() => <ContentContainer store={this.props.store} />}
          />
          <Route
            path="/users"
            render={() => <UsersContainer store={this.props.store} />}
          />
          {/* lazy component */}
          <Route path="/news" render={withSuspense(News)} />
          {/* lazy component */}
          <Route
            path="/music"
            render={() => {
              return (
                <React.Suspense fallback={<div> Loading </div>}>
                  <Music />
                </React.Suspense>
              );
            }}
          />
          {/* lazy component */}
          <Route
            path="/settings"
            render={() => {
              return (
                <React.Suspense fallback={<div> Loading </div>}>
                  <Setting />
                </React.Suspense>
              );
            }}
          />

          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
