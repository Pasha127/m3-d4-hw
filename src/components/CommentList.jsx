import {Button} from "react-bootstrap";
import {Component} from "react";
import ErrorComp from "./ErrorComp";
import LoadingComp from "./LoadingComp";

class CommentList extends Component{
    state={isLoading: false,
        error:     ""   }   
     
     deleteComment = async (id) =>{
        try {
            this.setState({isLoading: true})
            console.log("postTryHappens");
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`,{
            method: 'DELETE',    
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjI4ODA5NzMsImV4cCI6MTY2NDA5MDU3M30.LfQNzOVOStsDroMA6F7Hu2gO4oCR7rLxAzXx1RhXmk8'}
            })
            if(response.ok) {
                console.log("delHappens"); 
                //this.forceUpdate();               
              } else {
                console.log('error while deleting')
                this.setState({error: "Delete"})
            }
        } catch(err) {
            console.log(err)
            this.setState({error: "Delete"})
          }finally{this.setState({isLoading: false}); setTimeout(()=>{this.setState({error: ""}); console.log("err cleared")},5000); }
     }
     componentDidUpdate = (prevProps,prevState) =>{
        if(prevProps.coment !== this.props.comment){ this.props.fetchComments();} 
     }

     render(){
         return(<>
         {this.state.error && <ErrorComp error={this.state.error}/>}
            {this.state.isLoading && <LoadingComp/>}
             <div className="commentList">
                {/* <div className="indComment">Test Comment</div>  */}
                {console.log("comments", this.props.comments)}
             {this.props.comments && this.props.comments.map(comment => 
                <div key={comment._id} className="d-flex flex-row">
                    <div className="indComment">{comment.comment}</div>
                    <div className="d-flex flex-row align-items-center ml-auto">
                    <div className="rating">{comment.rate}</div>
                    <Button onClick={() => {this.deleteComment(comment._id); console.log(comment._id);}} className="xButton" variant="danger" size="sm">
                        X
                    </Button>
                    </div>
                </div>)}
            </div>
            </>)
        }
}

export default CommentList