import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Blog extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      this.setState({
        users: resp.data,
      });
    });
  }
  render() {
    return (
      <div className="container w-75">
        <>
          <table className="table text-center border">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={Math.random() * 20}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
              {
                <tr key={Math.random() * 20}>
                  <td>{this.state.users.id}</td>
                  <td>{this.state.users.name}</td>
                </tr>
              }
            </tbody>
          </table>
        </>
      </div>
    );
  }
}

export default withRouter(Blog);
