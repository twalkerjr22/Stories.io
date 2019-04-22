import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { spacing } from "@material-ui/system";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { borderColor } from "@material-ui/system/borders";
import Background from "../signup.jpg";
import SignupForm from "./SignupForm"

const styles = {
    root: {
        flexGrow: 1,
        minHeight: "100vh",
        height: "100vh",
        maring: "auto"
    },
    paper: {
        padding: 0,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        minHeight: "100vh",
        height: "100vh",
        boxShadow:"none"
    },

    leftPaper: {
        borderRadius: "0px",
        padding: 0,
        minHeight: "100vh",
        width: "100vh",
        boxShadow: "none",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        height: "100vh"
    },

    container: {
        maring: "auto",
        minHeight: "100vh",
        height: "100vh",
        backgroundColor: "#FFDC80"
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

class Signup extends Component {

    render() {
        return (
            <div style={styles.root}>
                <Grid style={styles.container} container>
                    <Grid xs={6}>
                        <Paper style={styles.leftPaper}>
                        </Paper>
                    </Grid>
                    <Grid xs={6}>
                        <Paper style={styles.paper}>
                           <SignupForm props={this.props}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
