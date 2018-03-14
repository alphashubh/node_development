import React from 'react';

class Form extends React.Component {
    handleSubmit(e, props){
        e.preventDefault();
        this.props.sendMessage(this.text_msg.value);
        console.log('in form ', this.text_msg.value);
        this.text_msg.value=null;
    }
    render(props) {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="form-inline">
                <input
                className="form-control"
                    ref={(text_msg) => { this.text_msg = text_msg } }
                    placeholder="Type text here...."
                    />
                <button  type="submit" className="btn btn-primary">send</button>
            </form>
        )
    }
}

export default Form;