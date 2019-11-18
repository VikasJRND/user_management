import React, { Component } from "react";
import { Layout, Menu, Button, Table } from "antd";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoded: false,
      items: [],
      singleitem: ""
    };
  }
  columns = [
    {
      title: "Sr.no",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: id => {
        return (
          <Button
            type="error"
            onClick={() => {
              // this.handleDelete(id);

              this.showdetails(id);
            }}
          >
            Show details
          </Button>
        );
      }
    }
  ];

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoded: true,
          items: data
        });
      });
  }
  showdetails = id => {
    const singleitem = this.state.items.filter(i => {
      if (i.id == id) {
        return i;
      }
      return null;
    });

    this.setState({
      singleitem: singleitem[0]
    });
  };

  handleDelete = id => {
    const items = this.state.items.filter(i => {
      if (i.id !== id) {
        return i;
      }
      return null;
    });
    this.setState({
      items
    });
  };
  logoutUser = e => {
    this.props.logout();
  };
  render() {
    var { isLoded } = this.state;

    if (!isLoded) {
      return <div>Loading........</div>;
    } else {
      return (
        <div>
          <Layout.Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              <Button
                style={{ float: "right", marginTop: "15px" }}
                type="primary"
                onClick={this.logoutUser}
              >
                Logout
              </Button>
            </Menu>
          </Layout.Header>

          <div style={{ width: "50%", float: "left" }}>
            <Table
              dataSource={this.state.items}
              columns={this.columns}
              pagination={false}
            />
          </div>
          <div
            style={{
              width: "49.8%",
              height: "704px",
              float: "right",
              border: "1px solid black"
            }}
          >
            <h1>Click on the button to see details of an employee</h1>
            <div>
              {this.state.singleitem ? (
                <div style={{ marginTop: "30px", fontSize: "1.5em" }}>
                  <span style={{ color: "blue", font: "bold" }}>Name: </span>
                  {this.state.singleitem.name}
                  <br />
                  <br /> <br />
                  <span style={{ color: "blue" }}>Email: </span>
                  {this.state.singleitem.email}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserList;
