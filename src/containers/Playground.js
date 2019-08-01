import React from "react";
// import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import withMUI from "../hoc/withMUI";
import withUser from "../hoc/withUser";
import RaisedButton from "material-ui/RaisedButton";
import { TextField } from "material-ui";
import FloatingActionButton from "material-ui/FloatingActionButton";
// import ContentAdd from "material-ui/svg-icons";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";

// firebase deploy --only hosting:hackthon2
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: null,
      go: false,
      one: 1,
      two: 1,
      three: 1,
      four: 1,
      playerone: true,
      playertwo: false
    };
  }
  // computerMind=()=>{
  //   let ths=this;
  //   ths.setState({think:true});
  //   setTimeout(()=>{ths.setState({think:false});},2000);
  // }
  fu = e => {
    let self = this.state,
      ths = this;
    // if (self.playerone === true) {
    if (self.one !== 0) {
      if (self.two !== 5)
        if (e.target.name === "1" && e.target.id === "2") {
          ths.setState({ two: parseInt(ths.state.one + ths.state.two) }, () => {
            console.log(ths.state);
          });
        }
      if (self.three !== 5)
        if (e.target.name === "1" && e.target.id === "3") {
          ths.setState(
            { three: parseInt(ths.state.one + ths.state.three) },
            () => {
              console.log(ths.state);
            }
          );
        }
      if (self.four !== 5)
        if (e.target.name === "1" && e.target.id === "4") {
          ths.setState(
            { four: parseInt(ths.state.one + ths.state.four) },
            () => {
              console.log(ths.state);
            }
          );
        }
      // ths.setState({ playertwo: true, playerone: false });
    }
    if (self.two !== 0) {
      if (self.three !== 5)
        if (e.target.name === "2" && e.target.id === "3") {
          ths.setState(
            { three: parseInt(ths.state.two + ths.state.three) },
            () => {
              console.log(ths.state);
            }
          );
        }
      if (self.one !== 5)
        if (e.target.name === "2" && e.target.id === "1") {
          ths.setState({ one: parseInt(ths.state.two + ths.state.one) }, () => {
            console.log(ths.state);
          });
        }
      if (self.four !== 5)
        if (e.target.name === "2" && e.target.id === "4") {
          ths.setState(
            { four: parseInt(ths.state.two + ths.state.four) },
            () => {
              console.log(ths.state);
            }
          );
        }
      // ths.setState({ playertwo: true, playerone: false });
    }
    // }
    // if (this.state.playertwo === true) {
    if (self.three !== 0) {
      if (self.one !== 5)
        if (e.target.name === "3" && e.target.id === "1") {
          ths.setState(
            { one: parseInt(ths.state.three + ths.state.one) },
            () => {
              console.log(ths.state);
            }
          );
        }
      if (self.four !== 5)
        if (e.target.name === "3" && e.target.id === "4") {
          ths.setState(
            { four: parseInt(ths.state.three + ths.state.four) },
            () => {
              console.log(ths.state);
            }
          );
        }
      if (self.two !== 5)
        if (e.target.name === "3" && e.target.id === "2") {
          ths.setState(
            { two: parseInt(ths.state.three + ths.state.two) },
            () => {
              console.log(ths.state);
            }
          );
        }
      ths.setState({ playertwo: false, playerone: true });
    }
    if (self.four !== 0) {
      if (self.one !== 5)
        if (e.target.name === "4" && e.target.id === "1") {
          ths.setState(
            { one: parseInt(ths.state.four + ths.state.one) },
            () => {
              console.log(ths.state);
            }
          );
        }
      if (self.two !== 5)
        if (e.target.name === "4" && e.target.id === "2") {
          ths.setState(
            { two: parseInt(ths.state.four + ths.state.two) },
            () => {
              console.log(ths.state);
            }
          );
        }
      if (self.three !== 5)
        if (e.target.name === "4" && e.target.id === "3") {
          ths.setState(
            { three: parseInt(ths.state.four + ths.state.three) },
            () => {
              console.log(ths.state);
            }
          );
        }
      ths.setState({ playertwo: false, playerone: true });
    }
    // }
  };
  render() {
    if (this.state.go === false) {
      return (
        <div>
          <center>
            <TextField
              floatingLabelText="Enter player one name"
              onChange={e => {
                this.setState({ playerName: e.target.value });
                localStorage.setItem("playerName", e.target.value);
              }}
            />
            <TextField
              floatingLabelText="Enter player two name"
              onChange={e => {
                this.setState({ playerName: e.target.value });
                localStorage.setItem("playerName", e.target.value);
              }}
            />
          </center>
          <br />
          <RaisedButton
            label="Let's Play"
            onClick={() => {
              if (this.state.playerName !== null) {
                this.setState({ go: true });
              }
              console.log(this.state);
            }}
            fullWidth={true}
          />
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ position: "relative" }}>
            <Card style={{ width: "40%", position: "absolute", top: "0px" }}>
              <CardHeader title={"Right " + this.state.one} />
              {this.state.one === 5 && <h3>Over</h3>}
              <button
                {...(this.state.one >= 5 || this.state.four >= 5
                  ? { disabled: true }
                  : {})}
                onClick={e => this.fu(e)}
                name="1"
                id="4"
                label="To Right"
                fullWidth={true}
                secondary={true}
              >
                To Right
              </button>
              <button
                {...(this.state.one >= 5 || this.state.three >= 5
                  ? { disabled: true }
                  : {})}
                onClick={e => this.fu(e)}
                name="1"
                id="3"
                label="To Left"
                fullWidth={true}
                primary={true}
              >
                To Left
              </button>
              <button
                {...(this.state.two === 5 || this.state.one === 5
                  ? { disabled: true }
                  : {})}
                onClick={e => this.fu(e)}
                name="1"
                id="2"
                label="To My Left"
                fullWidth={true}
                secondary={true}
              >
                To My Left
              </button>
            </Card>
            <Card
              style={{
                width: "40%",
                position: "absolute",
                top: "0px",
                right: "0px"
              }}
            >
              <CardHeader title={"Left " + this.state.two}>
                {this.state.two === 5 && <h3>Over</h3>}
                <button
                  {...(this.state.one === 5 || this.state.two === 5
                    ? { disabled: true }
                    : {})}
                  onClick={e => this.fu(e)}
                  name="2"
                  id="1"
                  label="To My Left"
                  fullWidth={true}
                  secondary={true}
                >
                  To My Right
                </button>
                <button
                  {...(this.state.two >= 5 || this.state.one >= 5
                    ? { disabled: true }
                    : {})}
                  onClick={e => this.fu(e)}
                  name="2"
                  id="4"
                  label="To Right"
                  fullWidth={true}
                  secondary={true}
                >
                  To Right
                </button>
                <button
                  {...(this.state.two >= 5 || this.state.three >= 5
                    ? { disabled: true }
                    : {})}
                  onClick={e => this.fu(e)}
                  // name="playertwo"
                  name="2"
                  id="3"
                  label="To Left"
                  fullWidth={true}
                  primary={true}
                >
                  To Left
                </button>
              </CardHeader>
            </Card>
            {/* {this.state.playerone && (
              <h1
                style={{
                  bottom: "-180px",
                  position: "absolute",
                  color: "red",
                  zIndex: "2"
                }}
              >
                your choice
              </h1>
            )} */}
          </div>
          {this.state.one === 5 && this.state.two === 5 ? (
            <h1
              style={{
                top: "0px",
                right: "0px",
                position: "absolute",
                backgroundColor: "antiquewhite",
                height: "-webkit-fill-available",
                width: "-webkit-fill-available",
                zIndex: "2"
              }}
            >
              Game over
              {(this.state.one === 5 && this.state.three === 5) ||
              (this.state.two === 5 && this.state.four === 5) ? (
                (this.state.one === 5 && this.state.three === 5) ||
                (this.state.two === 5 && this.state.four === 5) ? (
                  <p>game dra</p>
                ) : null
              ) : (
                <p>playerTwo win</p>
              )}
              <br />
              <RaisedButton
                label="Let's Play Again"
                onClick={() => {
                  this.setState({ one: 1, two: 1, three: 1, four: 1 });
                  console.log(this.state);
                }}
                fullWidth={true}
              />
            </h1>
          ) : null}
          {this.state.three === 5 && this.state.four === 5 ? (
            <h1
              style={{
                top: "0px",
                right: "0px",
                position: "absolute",
                backgroundColor: "antiquewhite",
                height: "-webkit-fill-available",
                width: "-webkit-fill-available",
                zIndex: "2"
              }}
            >
              Game over
              {(this.state.one === 5 && this.state.three === 5) ||
              (this.state.two === 5 && this.state.four === 5) ? (
                (this.state.one === 5 && this.state.three === 5) ||
                (this.state.two === 5 && this.state.four === 5) ? (
                  <p>game dra</p>
                ) : null
              ) : (
                <p>playerOne win</p>
              )}
              <br />
              <RaisedButton
                label="Let's Play Again"
                onClick={() => {
                  this.setState({ one: 1, two: 1, three: 1, four: 1 });
                  console.log(this.state);
                }}
                fullWidth={true}
              />
            </h1>
          ) : null}
          <div style={{ position: "relative", bottom: "-500px" }}>
            <Card style={{ width: "40%", position: "absolute", top: "0px" }}>
              <CardHeader title={"Left " + this.state.three} />
              {this.state.three === 5 && <h3>Over</h3>}

              <button
                {...(this.state.three >= 5 || this.state.one >= 5
                  ? { disabled: true }
                  : {})}
                onClick={e => this.fu(e)}
                name="3"
                id="1"
                // name="playerone"
                label="To Right"
                fullWidth={true}
                secondary={true}
              >
                To Right
              </button>
              <button
                {...(this.state.three >= 5 || this.state.two >= 5
                  ? { disabled: true }
                  : {})}
                onClick={e => this.fu(e)}
                name="3"
                id="2"
                // name="playerone"
                label="To Left"
                fullWidth={true}
                primary={true}
              >
                To Left
              </button>
              <button
                {...(this.state.four === 5 || this.state.three === 5
                  ? { disabled: true }
                  : {})}
                onClick={e => this.fu(e)}
                name="3"
                id="4"
                label="To My Right"
                fullWidth={true}
                secondary={true}
              >
                To My Right
              </button>
            </Card>
            {/* {this.state.playertwo && (
              <h1
                style={{
                  bottom: "0px",
                  position: "absolute",
                  color: "red",
                  zIndex: "2"
                }}
              >
                your choice
              </h1>
            )} */}

            <Card
              style={{
                width: "40%",
                position: "absolute",
                top: "0px",
                right: "0px"
              }}
            >
              <CardHeader title={"Right " + this.state.four} />
              {this.state.four === 5 && <h3>Over</h3>}
              <button
                {...(this.state.four >= 5 || this.state.one >= 5
                  ? { disabled: true }
                  : {})}
                onClick={e => this.fu(e)}
                name="4"
                id="1"
                // name="playerone"
                label="To Right"
                fullWidth={true}
                secondary={true}
              >
                To Right
              </button>
              <button
                {...(this.state.four >= 5 || this.state.two >= 5
                  ? { disabled: true }
                  : {})}
                onClick={e => this.fu(e)}
                name="4"
                id="2"
                // name="playerone"
                label="To Left"
                fullWidth={true}
                primary={true}
              >
                To Left
              </button>
              <button
                {...(this.state.three === 5 || this.state.four === 5
                  ? { disabled: true }
                  : {})}
                onClick={e => this.fu(e)}
                name="4"
                id="3"
                label="To My Left"
                fullWidth={true}
                secondary={true}
              >
                To My Left
              </button>
            </Card>
          </div>
        </div>
      );
    }
  }
}

export default withMUI(withUser(Home));
