import {InputGroup, FormControl, Button} from "react-bootstrap";
import {Component} from "react";

class AddComment extends Component{
    state={
               
     }
     addComment = async () =>{
        try {
            console.log("postTryHappens");
            const response = await fetch(`https://striveschool.herokuapp.com/api/comments/${this.props.book.asin}`,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjI4ODA5NzMsImV4cCI6MTY2NDA5MDU3M30.LfQNzOVOStsDroMA6F7Hu2gO4oCR7rLxAzXx1RhXmk8"
                }
            })
            if(response.ok) {
                console.log("postHappens");
                const data = await response.json()
                this.setState({ comments: data })
                console.log(this.state.comments)
            } else {
                console.log('error while posting')
            }
        } catch(err) {
            console.log(err)
          }
     }
     render(){
         return(
            <InputGroup className="mb-3">
            <FormControl
              placeholder="New Comment"
              aria-label="New Comment"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button onClick={this.addComment} variant="outline-secondary">Add</Button>
            </InputGroup.Append>
          </InputGroup>
            )
        }
}

export default AddComment