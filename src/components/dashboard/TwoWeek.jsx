import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

const styles = {
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
    }
};
class TwoWeek extends Component {
    state = {};

    render() {
        return (
            <div>
                <h2>2 Week Stories</h2>
                <Grid container>
                    <Grid item xs={3} />
                    <Grid item xs={3} />
                </Grid>
            </div>
        );
    }
}

export default TwoWeek;
