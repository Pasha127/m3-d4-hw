import {Alert} from "react-bootstrap";
import {Component } from "react";
             
   class ErrorComp extends Component{
      render(){
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
    }
export default ErrorComp