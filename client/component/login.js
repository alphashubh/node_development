import React from 'react';
import { browserHistory } from 'react-router';


class Login extends React.Component {
    authenticatUser() {
        console.log(this.username.value);
        browserHistory.push({
            pathname: "/chat",
            state: { username: this.username.value }
        });
    }
    render() {
        return (
            <div>
                <input
                    placeholder="Username"
                    ref={(username) => { this.username = username } }
                    required
                    />
                <button onClick={this.authenticatUser.bind(this)}>Login</button>
            </div>
        )
    }
}

export default Login;