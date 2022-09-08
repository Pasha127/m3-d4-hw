import {Component} from "react";
import {Badge} from "react-bootstrap";

class MyBadge extends Component{
    render(){
        return(
            <Badge pill variant="secondary">
            {this.props.inputText}
            </Badge>
        )
    }

}

export default MyBadge