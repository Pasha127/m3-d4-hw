import {Alert} from "react-bootstrap";
import {useState} from "react";
             
const ErrorComp= ()=>{
      
        return(
            <>
            {this.props.error && console.log(this.props.error)}
            <div className="alertContainer">
            <Alert variant="danger">
                {`Attention! ${this.props.error} failed!`}
            </Alert>
        </div>
        </>
                


        )
      
    }
export default ErrorComp