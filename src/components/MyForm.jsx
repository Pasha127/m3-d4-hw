import {useState} from "react";
import { Form, Button } from "react-bootstrap";


const MyForm = ()=>{
   /*  state={
        query:""
    }; */
    const setVal = (e) =>{
        e.preventDefault();
        this.setState({
            query: e.target.value
        });
    }
        
    
        return(
            
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Search:</Form.Label>
                  <Form.Control onChange={(e)=>{this.setVal(e)}} value={this.state.value} type="input" placeholder="Enter book title"  />
                    <Button onClick={()=>{}} aria-label="Enter">
                        <p className="mb-0">Enter</p>
                    </Button> 
                    {console.log(this.state.query)}             
                </Form.Group>
            </Form>
            
            )
        }
        


export default MyForm;