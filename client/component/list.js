import React from 'react';

class List extends React.Component {
    constructor(){
        super();
        this.state={
            cName: "",
        }
    }
show(item){
    console.log(item.name);
    if(item.msg.from!= item.name){
        //alert("message from user 1");
       // this.setState({cName : 'msg-card-li' })
       console.log("check Array obj", item.msg.msg);
      return <div className="msg-card-li-incoming">{item.msg.msg}</div>
    }
    else{
        return <div className="msg-card-li-outgoing">{item.msg.msg}</div>
    }
}
    render(props) {
          return (
            <ul className="msg-card">
                {
                    this.props.items.map((item) => <li >{this.show(item)}</li>)
                }

            </ul>
        )
    }

}

export default List;