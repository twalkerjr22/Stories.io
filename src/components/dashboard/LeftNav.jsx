import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "../../App.css";

const LeftNav = props => {
  return (
    <List component="nav">
          <ListItem button onClick={(e) => props.toggle(e, "dashboard")}>
        <h3 className="dash-nav-menu-item">Dashboard</h3>
      </ListItem>
          <ListItem button onClick={ (e) => props.toggle(e,"1-week")}>
        <h3 className="dash-nav-menu-item">1 Week</h3>
      </ListItem>
          <ListItem button onClick={(e) => props.toggle(e, "2-week")}>
        <h3 className="dash-nav-menu-item">2 Week</h3>
      </ListItem>
    </List>
  );
};

export default LeftNav;
