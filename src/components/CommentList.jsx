import {Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import ErrorComp from "./ErrorComp";
import LoadingComp from "./LoadingComp";

const CommentList= (props)=>{
    /* state={isLoading: false,
        error:     ""   }   */ 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    
    const deleteComment = async (id) =>{
        try {
            setIsLoading({isLoading: true})
            console.log("postTryHappens");
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`,{
            method: 'DELETE',    
            headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjI4ODA5NzMsImV4cCI6MTY2NDA5MDU3M30.LfQNzOVOStsDroMA6F7Hu2gO4oCR7rLxAzXx1RhXmk8'}
            })
            if(response.ok) {
                console.log("delHappens"); 
                props.fetchComments()
              } else {
                console.log('error while deleting')
                setError( "Delete")
            }
        } catch(err) {
            console.log(err)
            setError( "Delete")
          }finally{setIsLoading( false); setTimeout(()=>{setError(""); console.log("err cleared")},5000); ;}
     }   

         return(<>
         {error && <ErrorComp error={error}/>}
            {isLoading && <LoadingComp/>}
             <div className="commentList">
                {/* <div className="indComment">Test Comment</div>  */}
                {console.log("comments", props.comments)}
             {props.comments && props.comments.map(comment => 
                <div key={comment._id} className="d-flex flex-row">
                    <div className="indComment">{comment.comment}</div>
                    <div className="d-flex flex-row align-items-center ml-auto">
                    <div className="rating">{comment.rate}</div>
                    <Button onClick={() => {deleteComment(comment._id); console.log(comment._id);}} className="xButton" variant="danger" size="sm">
                        X
                    </Button>
                    </div>
                </div>)}
            </div>
            </>)
        
}

export default CommentList