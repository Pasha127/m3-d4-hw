import {Badge} from "react-bootstrap";


const MyBadge = (props)=>{
    
        return(
            <Badge pill variant="secondary">
            {props.inputText}
            </Badge>
        )
    

}

export default MyBadge