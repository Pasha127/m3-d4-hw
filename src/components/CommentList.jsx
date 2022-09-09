//import {} from "react-bootstrap";
import {Component} from "react";

class CommentList extends Component{
    state={
               
     }

     render(){
         return(
             <div>             
             {this.props.comments && this.props.comments.map(comment => <div>{comment}</div>)}
            </div>
            )
        }
}

export default CommentList