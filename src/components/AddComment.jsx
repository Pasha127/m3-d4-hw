import {InputGroup, Dropdown, DropdownButton, FormControl, Button} from "react-bootstrap";
import {Component} from "react";
import ErrorComp from "./ErrorComp";
import LoadingComp from "./LoadingComp";

class AddComment extends Component{
    state={
        query: {
          comment: "",
          rate: "",
          elementId: ""
        },
        isLoading: false,
        error: "",
        allowFetch: true
     }
     setQuery = (e) =>{      
      this.setState({
        query: {...this.state.query,
          comment: e.target.value,
          elementId: this.props.book
        },
        allowFetch: false
      });
  }
     setRate = (e) =>{      
      this.setState({
        query: {...this.state.query,
          rate: e.target.innerText
        },
        error: ""
      });
  }
     addComment = async () =>{
        try {
            console.log("postTryHappens");
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,{
            method: 'POST',    
            headers: {'Content-Type':'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjI4ODA5NzMsImV4cCI6MTY2NDA5MDU3M30.LfQNzOVOStsDroMA6F7Hu2gO4oCR7rLxAzXx1RhXmk8'},
            body: JSON.stringify(this.state.query)
            })
            if(response.ok) {
                console.log("postHappens");
                const data = await response.json()
                this.setState({ comments: data })
              } else {
                console.log('error while posting')
                this.setState({error: "Post"})
            }
        } catch(err) {
            console.log(err)
            this.setState({error: "Post"})
          }finally{this.setState({isLoading: false}); setTimeout(()=>{this.setState({error: ""}); console.log("err cleared")},5000);this.setState({
            query: {...this.state.query,
              comment: "",
              elementId: "",
              rate: ""
            },isLoading: false,
            error: "",
            allowFetch: true
          })}
     }
     componentDidUpdate =(prevProps,prevState)=>{
      if(this.state.allowFetch && prevState.query !== this.state.query){this.props.fetchComments()}
     }
     render(){
         return(<>
            {this.state.error && <ErrorComp error={this.state.error}/>}
            {/* {this.state.isLoading && <LoadingComp/>} */}
            <InputGroup className="mb-3">
              <div className="d-flex flex-row">
                
            <FormControl
              placeholder="New Comment"
              aria-label="New Comment"
              aria-describedby="basic-addon2"
              value= {this.state.query.comment}
              onChange={(e)=>{this.setQuery(e);}} 
              />
            <InputGroup.Append>
              <Button onClick={() =>{
                this.addComment()}} variant="outline-secondary">Add</Button>
            </InputGroup.Append>
            </div>
            <div className="d-flex flex-row">
            <DropdownButton
              className="w-100"
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title="Rate"
               id="input-group-dropdown-1"
               onClick={(e)=>{this.setRate(e); console.log(e.target.value)}}
      >
                <Dropdown.Item onClick={(e)=>{this.setRate(e);}}  href="#">1</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>{this.setRate(e);}} href="#">2</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>{this.setRate(e);}} href="#">3</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>{this.setRate(e);}} href="#">4</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>{this.setRate(e);}} href="#">5</Dropdown.Item>
            </DropdownButton>
            <div className="d-flex flex-row align-items-center justify-content-between">
            {this.state.query?.rate >=1 ? <div>⭐</div> :<div></div>}
            {this.state.query?.rate >=2 ? <div>⭐</div> :<div></div>}
            {this.state.query?.rate >=3 ? <div>⭐</div> :<div></div>}
            {this.state.query?.rate >=4 ? <div>⭐</div> :<div></div>}
            {this.state.query?.rate >=5 ? <div>⭐</div> :<div></div>}
            </div>
              
          </div>
          </InputGroup>
          </>)
        }
}

export default AddComment