import React from 'react';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            cName: "",
        }
    }
    show(item) {
        console.log(item.name);
        var date= item.msg.timestamp.split(",");
        var time=date[1].split(":", 2);
        var time1=date[1].split(" ");
        console.log(time1);
        var newTime=time[0] + ":" + time [1] + " " + time1[2] ;
        console.log(newTime);
        if (item.msg.from != item.name) {
            //alert("message from user 1");
            // this.setState({cName : 'msg-card-li' })
            console.log("check Array obj", item.msg.msg);
            return(
            <div className="msg-card-li-incoming">
                <div className="user-detail">{item.msg.from}</div>
                <table>
                    <tbody>
                <tr>
                <td className="msg-time">{newTime} </td>                 
                <td className="user-message">{item.msg.msg}</td>
                </tr>
                </tbody>
                </table>
                
            </div>);
        }
        else {
            return <div className="msg-card-li-outgoing">
                 <table>
                    <tbody>
                <tr>
                <td className="user-message">{item.msg.msg}</td>                    
                <td className="msg-time-out">{newTime} </td>                 
                </tr>
                </tbody>
                </table>
            </div>
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