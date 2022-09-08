import {Component} from "react";
import {Form,Button} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component{
    state={
        query: ""
    }

    setVal = (e) =>{
        e.preventDefault();
        this.setState({
            query: e.target.value
        });
    }
        
    render(){
        return(
            <div className="d-flex flex-column">
                
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Search:</Form.Label>
                  <Form.Control onChange={(e)=>{this.setVal(e)}} value={this.state.value} type="input" placeholder="Enter a book title"  />
                               
                </Form.Group>
            </Form>
            <div className="d-flex flex-wrap">
            {this.props.books.filter(book => {return(book.title.toLowerCase().includes(this.state.query?.toLowerCase()))}).map((book) => {
                return(<SingleBook key={`${book.asin}-${book.category}`} book={book} query={this.state.query}/>
               )            
            })}
            </div>
            </div>
            )
        }
        
    }
    
   // <Button onClick={()=>{}} aria-label="Enter">
   //     <p className="mb-0">Enter</p>
   // </Button>  
    

export default BookList