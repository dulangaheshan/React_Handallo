import React, { Component } from "react";

import TextField from "material-ui/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
        // return response.json();
        console.log(response);
      })
      .then(response => {
        if (response) {
          window.alert("Invalid Email or Password");
        } else {
          this.props.history.push("/Admin");
        }
      });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <br />
        <Card>
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
              <br />
              <TextField
                type="password"
                id="pass_word"
                name="pass_word"
                placeholder="Make it secure"
                value={data.pass_word}
                onChange={this.onChange}
              />
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

export default Login;
