import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import withMUI from "../hoc/withMUI";
import withUser from "../hoc/withUser";
import RaisedButton from "material-ui/RaisedButton";
import ActionAndroid from "material-ui/svg-icons/action/android";
import FontIcon from "material-ui/FontIcon";

// firebase deploy --only hosting:hackthon2
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { go: false };
  }
  render() {
    if (this.state.go === false) {
      return (
        <RaisedButton
          label="Let's Play"
          onClick={() => this.setState({ go: true })}
          fullWidth={true}
        />
      );
    } else {
      return (
        <div>
          <center>
            <h4>Chooose one</h4>
            <p>
              <RaisedButton
                onClick={() => this.props.history.push("/play")}
                label="Single Player"
                // labelPosition="before"
                primary={true}
              />
            </p>
            <p>
              <RaisedButton
                href="https://github.com/callemall/material-ui"
                target="_blank"
                label="MultiPlayer"
                secondary={true}
              />
            </p>
          </center>
        </div>
      );
    }
  }
}

export default withMUI(withUser(Home));
