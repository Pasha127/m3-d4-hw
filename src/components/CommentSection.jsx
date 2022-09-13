//import {} from "react-bootstrap";
import {useState, useEffect} from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import ErrorComp from "./ErrorComp";
import LoadingComp from "./LoadingComp";

const CommentSection = (props)=>{
    /* state={
        selected: false,
        isLoading: false,
        error:     ""   
     } */
     const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [selected, setSelected] = useState(false);
    const [comments, setComments] = useState(null);

     const fetchComments = async ()=>{
        try {
            setIsLoading({isLoading: true})
            console.log("fetchTries");
            console.log("test comments",props.book);
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/$props.book}`,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjI4ODA5NzMsImV4cCI6MTY2NDA5MDU3M30.LfQNzOVOStsDroMA6F7Hu2gO4oCR7rLxAzXx1RhXmk8"
                }
            })
            if(response.ok) {
                console.log("fetchHappens");
              const data = await response.json()
                setComments({ comments: data })
                /* console.log(this.state.comments) */
            } else {
                /* console.log('error while fetching') */
                setError({error: "Get"})
                
            }
          } catch(err) {
            console.log(err)
            setError({error: "Get"})
                
          }finally{setIsLoading({isLoading: false}); setTimeout(()=>{setError({error: ""}); console.log("err cleared")},5000)}
     }
     /* const componentDidMount = async () => {
        props.book && fetchComments();
    } */
    useEffect(() => {
        fetchComments();
      }, [props.book]);
    /* const componentDidUpdate=(prevProps,prevState)=>{
        if(prevProps.book !== props.book){fetchComments();} 
    } */
     
         return(<>
            
            {error && <ErrorComp error={error}/>}
            {isLoading && <LoadingComp/>}
             <div  onClick={(e)=>{e.stopPropagation()}}>             
             <CommentList fetchComments={fetchComments} comments={comments}/>            
             <AddComment fetchComments={fetchComments} book={props.book}/> 
            </div>
         </>
            )
        
}

export default CommentSection