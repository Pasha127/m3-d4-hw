import {Badge} from "react-bootstrap";
import {useState} from "react";

const MyBadge = ()=>{
    
        return(
            <Badge pill variant="secondary">
            {this.props.inputText}
            </Badge>
        )
    

}

export default MyBadge