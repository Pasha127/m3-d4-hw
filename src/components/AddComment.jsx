import {InputGroup, Dropdown, DropdownButton, FormControl, Button} from "react-bootstrap";
import {useState, useEffect } from "react";
import ErrorComp from "./ErrorComp";
import LoadingComp from "./LoadingComp";

const AddComment = (props)=>{
  /* state={
        query: {
          comment: "",
          rate: "",
          elementId: ""
        },
        isLoading: false,
        error: "",
        allowFetch: true
     } */
  const [query, setQuery] = useState({
    comment: "",
    rate: "",
    elementId: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [allowFetch, setAllowFetch] = useState(false);
  const [comments, setComments] = useState(null);
     const setMyQuery = (e) =>{      
      setQuery( {...query,
          comment: e.target.value,
          elementId: this.props.book
        }        
      );setAllowFetch(false);
  }
     const setRate = (e) =>{      
      setQuery( {...query,
          rate: e.target.innerText
        },);
        setError("");
  }
     const addComment = async () =>{
        try {
            console.log("postTryHappens");
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,{
            method: 'POST',    
            headers: {'Content-Type':'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjI4ODA5NzMsImV4cCI6MTY2NDA5MDU3M30.LfQNzOVOStsDroMA6F7Hu2gO4oCR7rLxAzXx1RhXmk8'},
            body: JSON.stringify(query)
            })
            if(response.ok) {
                console.log("postHappens");
                const data = await response.json()
                setComments( data )
              } else {
                console.log('error while posting')
                setError( "Post")
            }
        } catch(err) {
            console.log(err)
            setError( "Post")
          }finally{setIsLoading( false);setAllowFetch({allowFetch: true}); setTimeout(()=>{setError(""); console.log("err cleared")},5000);
          setQuery( {...query,
              comment: "",
              elementId: "",
              rate: ""
            }
          )       
     }}
    /*  const componentDidUpdate =(prevProps,prevState)=>{
      if(allowFetch && prevState.query !== query){this.props.fetchComments()}
     } */
     useEffect(() => {
      props.fetchComments();
    }, [query]);
         return(<>
            {error && <ErrorComp error={error}/>}
            {/* {isLoading && <LoadingComp/>} */}
            <InputGroup className="mb-3">
              <div className="d-flex flex-row">
                
            <FormControl
              placeholder="New Comment"
              aria-label="New Comment"
              aria-describedby="basic-addon2"
              value= {query.comment}
              onChange={(e)=>{setMyQuery(e);}} 
              />
            <InputGroup.Append>
              <Button onClick={() =>{
                addComment()}} variant="outline-secondary">Add</Button>
            </InputGroup.Append>
            </div>
            <div className="d-flex flex-row">
            <DropdownButton
              className="w-100"
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title="Rate"
               id="input-group-dropdown-1"
               onClick={(e)=>{setRate(e); console.log(e.target.value)}}
      >
                <Dropdown.Item onClick={(e)=>{setRate(e);}}  href="#">1</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>{setRate(e);}} href="#">2</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>{setRate(e);}} href="#">3</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>{setRate(e);}} href="#">4</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>{setRate(e);}} href="#">5</Dropdown.Item>
            </DropdownButton>
            <div className="d-flex flex-row align-items-center justify-content-between">
            {query?.rate >=1 ? <div>⭐</div> :<div></div>}
            {query?.rate >=2 ? <div>⭐</div> :<div></div>}
            {query?.rate >=3 ? <div>⭐</div> :<div></div>}
            {query?.rate >=4 ? <div>⭐</div> :<div></div>}
            {query?.rate >=5 ? <div>⭐</div> :<div></div>}
            </div>
              
          </div>
          </InputGroup>
          </>)
        
}

export default AddComment