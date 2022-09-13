import {useState} from "react";
import {Form,Spinner} from "react-bootstrap";
import SingleBook from "./SingleBook";
const BookList= (props)=>{
    /* state={
        query: "",
        isLoading: true
    } */
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const setVal = (e) =>{
        e.preventDefault();
        setQuery({
            query: e.target.value
        });
    }   
    
    
        return(
            <>
            {isLoading && 
            <div className="d-flex w-100 justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>}
            <div className="d-flex flex-column">
            
            {props.books && isLoading && setIsLoading({isLoading: false})}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Search:</Form.Label>
                  <Form.Control onChange={(e)=>{setVal(e)}} /* value={this.state.value} */ type="input" placeholder="Enter a book title"  />
                               
                </Form.Group>
            </Form>
            <div className="d-flex flex-wrap">
            {props.books.filter(book => {return(book.title.toLowerCase().includes(query?.toLowerCase()))}).map((book) => {
                return(<SingleBook
                    key={`${book.asin}-${book.category}`} book={book} query={query} cardSelected={props.cardSelected}/>
               )            
            })}

            </div>
            </div>
            </>
            )
        
        
    }   


export default BookList