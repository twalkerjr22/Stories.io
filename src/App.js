import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";

class App extends Component {
  
  state = {
    username: "",
    password: "",
    userId: "",
    isAuthenticated: false,
    isAuthenticating:true
  };

  getUserName = () => {
      return this.state.userId;
  }

  userHasAuthenticated = status => {
    this.setState({ isAuthenticated: status });
  };

  async componentDidMount() {
    try {
      // Checking to see the the user is logged in already
      await Auth.currentSession();
      const user = await Auth.currentAuthenticatedUser();
      this.setState({userId:user.attributes.email})
      console.log(user);
      this.userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  handleLogout = async event =>{
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      getUserName: this.getUserName
    };
    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <NavBar isAuthenticated={this.state.isAuthenticated} getUserName={this.getUserName} handleLogout={this.handleLogout}/>
          <Routes childProps={childProps}/>
      </div>
    );
  }
}

export default withRouter(App);
