import {Component} from "react";
import {Form,Spinner} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component{
    state={
        query: "",
        isLoading: true
    }

    setVal = (e) =>{
        e.preventDefault();
        this.setState({
            query: e.target.value
        });
    }
    fetchComments = async () => {
        try {
            const response = await fetch(`https://striveschool.herokuapp.com/api/comments/${this.props.book.asin}`)
            if(response.ok) {
              const data = await response.json()
                this.setState({ comments: data })
                console.log(this.state.comments)
            } else {
                console.log('error while fetching')
            }
          } catch(e) {
            console.log(e)
          }
    }
    
    render(){
        return(
            <>
            {this.state.isLoading && 
            <div className="d-flex w-100 justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>}
            <div className="d-flex flex-column">
            
            {this.props.books && this.state.isLoading && this.setState({isLoading: false})}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Search:</Form.Label>
                  <Form.Control onChange={(e)=>{this.setVal(e)}} value={this.state.value} type="input" placeholder="Enter a book title"  />
                               
                </Form.Group>
            </Form>
            <div className="d-flex flex-wrap">
            {this.props.books.filter(book => {return(book.title.toLowerCase().includes(this.state.query?.toLowerCase()))}).map((book) => {
                return(<SingleBook
                    onClick={
                        ()=>{this.fetchComments();}
                    } 
                    key={`${book.asin}-${book.category}`} book={book} query={this.state.query}/>
               )            
            })}

            </div>
            </div>
            </>
            )
        }
        
    }
    
   // <Button onClick={()=>{}} aria-label="Enter">
   //     <p className="mb-0">Enter</p>
   // </Button>  
    

export default BookList