import React from 'react';

class Form extends React.Component {
    handleSubmit(e, props) {
        e.preventDefault();
        this.props.sendMessage(this.text_msg.value);
        console.log('in form ', this.text_msg.value);
        this.text_msg.value = null;
    }
    render(props) {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="form">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    className="form-control"
                                    ref={(text_msg) => { this.text_msg = text_msg } }
                                    placeholder="Type text here...."
                                    required
                                    />
                            </td>
                            <td>
                                <button type="submit" className="btn btn-primary glyphicon glyphicon-send"></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default Form;