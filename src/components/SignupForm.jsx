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

class SignupForm extends Component {
  constructor(props) {
    super(props);
    console.log(props.props);
    this.state = {
      email: "",
      password: "",
      confirmationCode: "",
      newUser: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
      await Auth.signIn(this.state.email, this.state.password);

      this.props.props.history.push("/dashboard");
    } catch (event) {
      alert(event.message);
    }
  };

  handleSubmit = async event => {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: this.state.email,
        password: this.state.password,
      })
        .then(data => console.log(data))
        .catch(err => console.log(err));

      this.setState({
        newUser
      });
    } catch (event) {
      alert(event.message);
    }
  };

  renderConfirmation = () => {
    return (
      <main className={styles.main}>
        <CssBaseline />
        <Paper style={styles.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={this.handleConfirmationSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="number">Confirmation Code</InputLabel>
              <Input
                id="confirmationCode"
                name="confirmationCode"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
              />
            </FormControl>

            <Button
              onSubmit={this.handleConfirmationSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              confirm
            </Button>
          </form>
        </Paper>
      </main>
    );
  };
  renderSignup = () => {
    return (
      <main className={styles.main}>
        <CssBaseline />
        <Paper style={styles.paper}>
          <Typography component="h1" variant="h5">
            Sign up For Sprint.io
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
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
              onClick={this.handleSubmit}
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
  };

  render() {
    return (
      <React.Fragment>
        {this.state.newUser === null
          ? this.renderSignup()
          : this.renderConfirmation()}
      </React.Fragment>
    );
  }
}
SignupForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignupForm);
