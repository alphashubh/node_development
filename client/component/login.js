import React from 'react';
import { browserHistory } from 'react-router';


class Login extends React.Component {
    authenticatUser() {
        console.log(this.username.value);
        browserHistory.push({
            pathname: "/chat",
            state: { username: this.username.value, to: this.to.value }
        });
    }
    render() {
        return (
            <div  className="col-md-4 col-md-offset-4">
                <center>
                <h1 className="jumbotron">Chat App</h1>
                <input className="form-control"
                    placeholder="Username"
                    ref={(username) => { this.username = username } }
                    required
                    /><br/>

                    <input className="form-control"
                    placeholder="to"
                    ref={(to) => { this.to = to } }
                    required
                    /><br/>
                <button className="btn btn-primary" onClick={this.authenticatUser.bind(this)}>Chat</button>
                </center>
            </div>
        )
    }
}

export default Login;