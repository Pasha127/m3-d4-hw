//import {} from "react-bootstrap";
import {Component} from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import ErrorComp from "./ErrorComp";
import LoadingComp from "./LoadingComp";

class CommentSection extends Component{
    state={
        selected: false,
        isLoading: false,
        error:     ""   
     }
     fetchComments = async ()=>{
        try {
            this.setState({isLoading: true})
            console.log("fetchTries");
            console.log("test comments",this.props.book);
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.book}`,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjI4ODA5NzMsImV4cCI6MTY2NDA5MDU3M30.LfQNzOVOStsDroMA6F7Hu2gO4oCR7rLxAzXx1RhXmk8"
                }
            })
            if(response.ok) {
                console.log("fetchHappens");
              const data = await response.json()
                this.setState({ comments: data })
                /* console.log(this.state.comments) */
            } else {
                /* console.log('error while fetching') */
                this.setState({error: "Get"})
                
            }
          } catch(err) {
            console.log(err)
            this.setState({error: "Get"})
                
          }finally{this.setState({isLoading: false}); setTimeout(()=>{this.setState({error: ""}); console.log("err cleared")},5000)}
     }
     componentDidMount = async () => {
        this.fetchComments();
    }
     render(){
         return(<>
            
            {this.state.error && <ErrorComp error={this.state.error}/>}
            {this.state.isLoading && <LoadingComp/>}
             <div  onClick={(e)=>{e.stopPropagation()}}>             
             <CommentList fetchComments={this.fetchComments} comments={this.state.comments}/>            
             <AddComment fetchComments={this.fetchComments} book={this.props.book}/> 
            </div>
         </>
            )
        }
}

export default CommentSection