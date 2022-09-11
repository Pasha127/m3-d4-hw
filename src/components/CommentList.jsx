//import {} from "react-bootstrap";
import {Component} from "react";

class CommentList extends Component{
    state={
               
     }

     render(){
         return(
             <div className="commentList">
                <div className="indComment">Test Comment</div> 
             {this.props.comments && this.props.comments.map(comment => <div>{comment}</div>)}
            </div>
            )
        }
}

export default CommentList