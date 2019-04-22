import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Auth } from "aws-amplify";

const styles = {
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: "30px",
    marginRight: "30px"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    marginTop: "60px",
    height: "100%"
  },

  form: {
    width: "100%" // Fix IE 11 issue.
  }
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignin = async event => {
    event.preventDefault();
    try {
      const user = await Auth.signIn(this.state.email, this.state.password);
      this.props.props.userHasAuthenticated(true);

      if (user) {
        this.props.props.history.push("/dashboard");
      }
    } catch (event) {
      alert(event.message);
    }
  };

  render() {
    return (
      <main className={styles.main}>
        <CssBaseline />
        <Paper style={styles.paper}>
          <Typography component="h1" variant="h5">
            Sign in to Spring.io
          </Typography>
          <form onSubmit={this.handleSignin}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                onChange={this.handleChange}
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={this.handleSignin}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);
