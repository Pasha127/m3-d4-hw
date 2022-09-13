import {useState} from "react";
import {Alert} from "react-bootstrap";


const WarningSign= ()=>{
    
        return(

            
            ['danger'].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    This is a {variant} alert—{this.props.inputText}!
                </Alert>
                )
  ));

}

export default WarningSign;