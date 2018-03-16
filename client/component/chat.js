import React from 'react';
import socketIOClient from "socket.io-client";

import List from './list';
import Form from './form';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      response: [],
      endpoint: "http://10.224.238.153:4001",
      message: [],
      socket: "",
    };
    var socket = "";
  }
  //   componentDidMount() {
  //     const { endpoint } = this.state;
  //     const socket = socketIOClient(endpoint);
  //    // socket.on("FromAPI", data => this.setState({ response: data }));
  //   }
  componentDidMount() {
    this.socket = socketIOClient("http://10.224.238.153:4001/", { query: { "username": this.props.location.state.username, "to": this.props.location.state.to } });
    console.log("send to user", this.props.location.state.to);
    this.showMessage();
  }

  sendMessage(inputValue) {
    // this.setState({ response: this.text_msg.value })
    //console.log(this.text_msg.value);
    var date = new Date().toLocaleString();
    console.log(date);
    var value = {
      from: this.props.location.state.username,
      to: this.props.location.state.to,
      msg: inputValue,
      timestamp: date
    };
    this.socket.emit("chat message", value);
    console.log('message sent')
    //this.showMessage();
  }
  showMessage(props) {
    console.log("upcoming list..........");
    this.socket.on("chat message", (msg) => {
      console.log('coming message', msg);
      let list = this.state.response;
      var details = {
        name: this.props.location.state.username,
        msg
      }
      list.push(details);
      // list.push(msg);
      console.log('after list ', list);
      this.setState({ message: list });
      console.log("upcoming list after push", this.state.message);
    })
  }


  render(props) {

    return (
      <div >
        <div className="col-md-3 col-md-offset-4 header">Chat with {this.props.location.state.to.toUpperCase()} </div>

        <div className=" col-md-3 col-md-offset-4 msg-card">
          <div >
            <div className="message-board">
              <List items={this.state.message} />
            </div>
            <div >
              <Form sendMessage={this.sendMessage.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;