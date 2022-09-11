//import {} from "react-bootstrap";
import {Component} from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentSection extends Component{
    state={
        selected: false        
     }
     componentDidMount = async () => {
        try {
            console.log("fetchTries");
            const response = await fetch(`https://striveschool.herokuapp.com/api/comments/${this.props.book.asin}`,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjI4ODA5NzMsImV4cCI6MTY2NDA5MDU3M30.LfQNzOVOStsDroMA6F7Hu2gO4oCR7rLxAzXx1RhXmk8"
                }
            })
            if(response.ok) {
                console.log("fetchHappens");
              const data = await response.json()
                this.setState({ comments: data })
                console.log(this.state.comments)
            } else {
                console.log('error while fetching')
            }
          } catch(err) {
            console.log(err)
          }
    }
     render(){
         return(
             <div  onClick={(e)=>{e.stopPropagation()}}>             
            <CommentList book={this.props.comments}/>
            <AddComment  book={this.props.book}/>
            </div>
            )
        }
}

export default CommentSection