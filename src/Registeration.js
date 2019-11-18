import React, { Component } from "react";
import { Button, Modal, Input } from "antd";

class Registeration extends Component {
  state = { visible: false, name: "", email: "" };

  handleChange = e => {
    if (e.target.name === "name") {
      this.setState({
        name: e.target.value
      });
    } else if (e.target.name === "paasword") {
      this.setState({
        email: e.target.value
      });
    }
  };
  register = e => {
    this.props.registerUser(this.state.name, this.state.email);
    this.setState({
      visible: false
    });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.showModal}>Register Now!!</Button>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.register}
          onCancel={this.handleCancel}
        >
          <label>Name</label>
          <Input onChange={this.handleChange} name="name" type="text" />
          <br /> <br />
          <label>Paasword</label>
          <Input onChange={this.handleChange} name="paasword" type="text" />
        </Modal>
      </div>
    );
  }
}

export default Registeration;
