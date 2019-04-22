import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";

const styles = {
  root: {
    flexGrow: 1,
    position:"fixed",
  },
  grow: {
    flexGrow: 1,
    textAlign: "left"
  },
  button: {
    fontSize: "18px"
  }
};

const SignedOutNav = props => {
  return (
    <div className={styles.root}>
      <AppBar className="navbar" position="fixed" color="default">
        <Toolbar>
          <h2 style={styles.grow}>Stories.io</h2>

          <Button color="inherit" href="/signup" style={styles.button}>
            Sign-up
          </Button>
          <Button color="inherit" href="/login" style={styles.button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const SignedInNav = props => {
  return (
    <div className={styles.root}>
      <AppBar className="navbar" position="static" color="default">
        <Toolbar>
          <h2 style={styles.grow}>Stories.io</h2>
          <Button
            color="inherit"
            onClick={props.props.handleLogout}
            style={styles.button}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const Navbar = props => {
  if (props.isAuthenticated === true) {
    return <SignedInNav props={props} />;
  } else {
    return <SignedOutNav props={props} />;
  }
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
