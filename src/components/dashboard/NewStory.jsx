import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { height } from "@material-ui/system/sizing";

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    color: "#e6405d"
  },
  p: {
    fontSize: "18px"
  },
  addedText: {
    margin: "0",
    top: "50%",
    left: "55%",
    position: "absolute"
  },
  circleLoader: {
    top: "50%",
    margin: "auto",
    position: "absolute"
  },
  card: {
    minHeight: "90%",
    margin: "auto",
    justifyContent: "center",
    padding: "20px",
    marginTop: "20px",
    display: "block",
    width: "60%"
  },
  textField: {
    width: "50%",
    margin: "20px"
  }
};

class NewStory extends Component {
  constructor(props) {
    super(props);
    console.log(props.getUserName());
  }
  state = {
    submitting: false,
    success: false,
    loading: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = () => {
    const data = {
      userId: this.props.getUserName(),
      title: this.state.storyTitle,
      descr: this.state.descr
    };

    this.setState({ submitting: true });
    this.setState({ loading: true });

    axios
      .post(
        "https://zi4wr9xa8d.execute-api.us-east-1.amazonaws.com/prod/stories/?userId=" +
          this.props.getUserName() +
          "&storyTitle=" +
          this.state.storyTitle +
          "&descript=" +
          this.state.descr
      )
      .then(res => {
        console.log(this.props);
        this.setState({ success: true });
        this.setState({ loading: false });
        setTimeout(() => {
          this.props.toggle({}, "1-week");
        }, 2000);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Card style={styles.card}>
          {this.state.submitting === false && (
            <div>
              <h1 style={styles.title}>New Story</h1>
              <p style={styles.p}>
                A story is simply a goal you would like to accomplish.It's a
                story you tell yourself of how you will accomplish something
              </p>
              <form>
                <Grid container spacing={12}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      style={styles.textField}
                      variant="outlined"
                      id="title"
                      onChange={this.handleChange}
                      name="storyTitle"
                      label="Story Title"
                      autoComplete="stitle"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      style={styles.textField}
                      id="description"
                      name="descr"
                      onChange={this.handleChange}
                      variant="outlined"
                      multiline
                      rowsMax="4"
                      label="Descrption"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={styles.button}
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          )}
          {this.state.loading === true && (
            <CircularProgress style={styles.circleLoader} />
          )}
          {this.state.success === true && (
            <h2 style={styles.addedText}>Story Added!</h2>
          )}
        </Card>
      </React.Fragment>
    );
  }
}

export default NewStory;
