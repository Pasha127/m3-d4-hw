import {useState} from "react";
import { Form, Button } from "react-bootstrap";


const MyForm = ()=>{
   /*  state={
        query:""
    }; */
    const [query, setQuery] = useState("");
    const [value, setValue] = useState("");
    const setVal = (e) =>{
        e.preventDefault();
        setQuery({
            query: e.target.value
        });
    }
        
    
        return(
            
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Search:</Form.Label>
                  <Form.Control onChange={(e)=>{setVal(e)}} value={value} type="input" placeholder="Enter book title"  />
                    <Button onClick={()=>{}} aria-label="Enter">
                        <p className="mb-0">Enter</p>
                    </Button> 
                    {console.log(query)}             
                </Form.Group>
            </Form>
            
            )
        }
        


export default MyForm;