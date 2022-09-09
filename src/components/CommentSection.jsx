//import {} from "react-bootstrap";
import {Component} from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentSection extends Component{
    state={
        selected: false        
     }

     render(){
         return(
             <div>             
            <CommentList book={this.props.comments}/>
            <AddComment  book={this.props.book}/>
            </div>
            )
        }
}

export default CommentSection