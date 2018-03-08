import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import List from './list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      response: [],
      endpoint: "http://127.0.0.1:4001",
      message: []
    };
  }
  //   componentDidMount() {
  //     const { endpoint } = this.state;
  //     const socket = socketIOClient(endpoint);
  //    // socket.on("FromAPI", data => this.setState({ response: data }));
  //   }
  sendMessage(e) {
    e.preventDefault();
   // this.setState({ response: this.text_msg.value })
    console.log(this.text_msg.value);
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    var value = this.text_msg.value;
    socket.emit("chat message", value);
    this.showMessage(socket);
  }
  showMessage(socket) {
    console.log("upcoming list..........");
    socket.on("chat message", (msg) => {
    let list = this.state.response;
    list.push(msg);
    this.setState({ message: list });
      console.log("upcoming list after push", this.state.message);    
    })
  }
  

  render() {
    
    return (
      <form onSubmit={this.sendMessage.bind(this)}>
        <List items={this.state.message} />
        <div>
          <input
            ref={(text_msg) => { this.text_msg = text_msg } }
            placeholder="Type text here...."
            />
          <button >send</button>
        </div>
      </form>
    );
  }
}
export default App;