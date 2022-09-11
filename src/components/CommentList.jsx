import {Button} from "react-bootstrap";
import {Component} from "react";

class CommentList extends Component{
    state={
               
     }

     render(){
         return(
             <div className="commentList">
                <div className="indComment">Test Comment</div> 
                {console.log("comments", this.props.comments)}
             {this.props.comments && this.props.comments.map(comment => 
                <div className="d-flex flex-row">
                    <div>{comment.comment}</div>
                    <div className="d-flex flex-row align-items-center  ml-auto">
                    <div className="rating">{comment.rate}</div>
                    <Button className="xButton" variant="danger" size="sm">
                        X
                    </Button>
                    </div>
                </div>)}
            </div>
            )
        }
}

export default CommentList