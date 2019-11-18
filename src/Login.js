import React, { Component } from "react";
import Registration from "./Registeration";
import { message, Form, Icon, Input, Button, Checkbox } from "antd";
import UserList from "./UserList";
import "./Login.css";

class Login extends Component {
  state = {
    users: [
      { name: "testuser", password: "test", id: 1 },
      { name: "Admin", password: "admin", id: 2 },
      { name: "hey", password: "hey", id: 3 }
    ],
    loginCheck: false,
    inputName: "",
    inputPassword: ""
  };

  loginCheck = e => {
    for (let index = 0; index < this.state.users.length; index++) {
      if (
        this.state.users[index].name === this.state.inputName &&
        this.state.users[index].password === this.state.inputPassword
      ) {
        this.setState({
          loginCheck: true
        });
      }
    }
    this.validate();
  };
  validate = () => {
    console.log("called");
    if (this.state.loginCheck !== true) {
      this.error();
    } else {
      this.success();
    }
  };
  success = () => {
    message.success("Login successfully ");
  };
  error = () => {
    message.error("Invalid username or password");
  };
  registerUser = (name, password) => {
    const newuser = {
      name: name,
      password: password,
      id: this.state.users.length + 1
    };

    var currentUserList = [];

    currentUserList = this.state.users;
    currentUserList.push(newuser);

    this.setState({
      users: currentUserList
    });
  };
  logout = e => {
    this.setState({
      loginCheck: false
    });
  };
  handleChange = e => {
    if (e.target.name === "Username") {
      this.setState({
        inputName: e.target.value
      });
    } else if (e.target.name === "password") {
      this.setState({
        inputPassword: e.target.value
      });
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        
       
                <Form.Item>
                  {getFieldDecorator("userName", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your username!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Username"
                      name="Username"
                      onChange={this.handleChange}
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your Password!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <a href="/" style={{ float: "left" }}>
                    {getFieldDecorator("remember", {
                      valuePropName: "checked",
                      initialValue: true
                    })(<Checkbox>Remember me</Checkbox>)}
                  </a>

                  <a
                    className="login-form-forgot"
                    href="/"
                    style={{ float: "right" }}
                  >
                    Forgot password
                  </a>
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{ width: "80%" }}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={this.loginCheck}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Form.create()(Login);
