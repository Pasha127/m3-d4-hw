import {Component} from "react";
import {Alert} from "react-bootstrap";


class WarningSign extends Component{
    render(){
        return(

            
            ['danger'].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    This is a {variant} alert—{this.props.inputText}!
                </Alert>
                )
  ));
}
}

export default WarningSign;