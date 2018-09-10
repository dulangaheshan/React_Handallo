import React, { Component } from "react";

import TextField from "material-ui/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    data: {
      email: "",
      pass_word: ""
    }
  };
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.data);
    fetch("https://localhost:44371/api/Administer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.data)
    })
      .then(function(response) {
        return response.json();
        //console.log(response);
      })
      .then(data => {
        console.log(data);
        if (data === true) {
          this.props.history.push("/Admin");
        } else {
          alert(" have been not logged");
        }
      });
  };
  render() {
    const { data } = this.state;
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(require("../Images/menu-3356827_1920.jpg"))`
        }}
      >
        <br />
        <Card
          style={{
            marginLeft: "38%",
            marginRight: "38%",
            marginTop: "10%",
            paddingBottom: "5%",
            paddingTop: "5%"
          }}
        >
          <br />
          <CardContent>
            <form onSubmit={e => this.onSubmit(e)}>
              <Typography component="h2" color="textSecondary">
                Admin LogIn
              </Typography>
              <br />
              <TextField
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={data.email}
                onChange={this.onChange}
              />
              <br /> <br />
              <TextField
                type="password"
                id="pass_word"
                name="pass_word"
                placeholder="Make it secure"
                value={data.pass_word}
                onChange={this.onChange}
              />
              <br />
              <br />
              <Button type="submit" variant="contained" color="secondary">
                LogIn
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(Login);
