import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { spacing } from "@material-ui/system";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { borderColor } from "@material-ui/system/borders";

const styles = {
    root: {
        flexGrow: 1,
        marginTop: "30px",
        minHeight: "400px",
        maring: "auto"
    },
    paper: {
        padding: 4,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        minHeight: "400px",
        width: "80%"
    },

    container: {
        maring: "auto",
        minHeight: "400px",
        backgroundColor: "#FFDC80"
    },

    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: "10px",
        marginRight: "10px",
        width: "30%",
        borderColor: "#FCAF45",
        color: "#C13584",
        backgroundColor: "#FFDC80"
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

class HeroHeader extends Component {
    state = {
        username: ""
    };

    handleChange = (e) => {
        console.log(e.target.value);

    }
    render() {
        return (
            <div style={styles.root}>
                <Grid style={styles.container} container>
                    <Grid xs={12}>
                        <Paper style={styles.paper}>
                            
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

HeroHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroHeader);
