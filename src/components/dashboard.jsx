import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "../App.css";
import LeftNav from "./dashboard/LeftNav";
import MainDashboard from "./dashboard/MainDashboard";
import OneWeek from "./dashboard/OneWeek";
import TwoWeek from "./dashboard/TwoWeek";
import NewStory from "./dashboard/NewStory";

const styles = {
  root: {
    flexGrow: 1,

    maring: "auto"
  },
  paper: {
    padding: 0,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    minHeight: "100vh",
    height: "100vh",
    boxShadow: "none"
  },

  leftPaper: {
    borderRadius: "0px",
    padding: 0,
    minHeight: "100vh",
    width: "100vh",
    boxShadow: "none",
    backgroundSize: "cover",
    height: "100vh"
  },

  container: {
    maring: "auto",
    minHeight: "100vh",
    height: "100vh",
    backgroundColor: "#FFDC80"
  },

  leftNavMenu: {
    maring: "auto",
    minHeight: "100vh",
    height: "100vh",
    backgroundColor: "#e6405d"
  },

  leftNavText: {
    color: "white"
  },

  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },

  welcome: {
    color: "#E1306C"
  }
};
class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    view: "dashboard"
  };

  toggleView = (e, tog) => {
    this.setState({ view: tog });
  };

  ListItemLink = props => {
    return <ListItem button component="a" {...props} />;
  };

  dashboardView = () => {
    return <MainDashboard />;
  };
  render() {
    return (
      <div style={styles.root}>
        <Grid container>
          <Grid
            item
            xs={2}
            style={styles.leftNavMenu}
            className="MuiPaper-elevation4-19"
          >
            <LeftNav toggle={this.toggleView} />
          </Grid>
          <Grid item xs={10}>
            {this.state.view === "dashboard" && <MainDashboard />}
            {this.state.view === "1-week" && (
              <OneWeek
                toggle={this.toggleView}
                getUserName={this.props.getUserName}
              />
            )}
            {this.state.view === "2-week" && (
              <TwoWeek getUserName={this.props.getUserName} />
            )}
            {this.state.view === "NewStory" && (
              <NewStory
                getUserName={this.props.getUserName}
                toggle={this.toggleView}
              />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
