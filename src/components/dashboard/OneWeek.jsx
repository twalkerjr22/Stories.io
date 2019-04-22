import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Card from "@material-ui/core/Card";

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
  card: {
    margin: "20px",
    marginTop: "20px"
  },
  button: {
    float: "right",
    marginRight: "20px"
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

/*Component for the one week stories*/
class OneWeek extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    axios
      .get(
        "https://zi4wr9xa8d.execute-api.us-east-1.amazonaws.com/prod/stories/?userId=" +
          this.props.getUserName()
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ oneWeek: res.data.Items });
      });
  };

  state = {};

  render() {
    return (
      <div>
        <h2>1 Week Stories</h2>
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={e => this.props.toggle(e, "NewStory")}
            >
              Add a Story
            </Button>
          </Grid>
          {this.state.oneWeek &&
            this.state.oneWeek.map((story, id) => {
              return (
                <Grid item xs={3}>
                  <Card style={styles.card}>
                    <h1>{story.storyTitle}</h1>
                    <p>{story.descript}</p>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}

export default OneWeek;
