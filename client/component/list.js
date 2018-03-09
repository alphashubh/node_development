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
    if(item.name=="user1"){
        //alert("message from user 1");
       // this.setState({cName : 'msg-card-li' })
      return <div >{item.msg}</div>
    }
    else{
        return null
    }
}
    render(props) {
          return (
            <ul className="msg-card">
                {
                    this.props.items.map((item) => <li className="msg-card-li">{this.show(item)}</li>)
                }

            </ul>
        )
    }

}

export default List;