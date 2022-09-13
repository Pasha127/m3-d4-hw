import {Alert} from "react-bootstrap";
import {useState} from "react";
             
const ErrorComp= (props)=>{
      
        return(
            <>
            {props.error && console.log(props.error)}
            <div className="alertContainer">
            <Alert variant="danger">
                {`Attention! ${props.error} failed!`}
            </Alert>
        </div>
        </>
                


        )
      
    }
export default ErrorComp