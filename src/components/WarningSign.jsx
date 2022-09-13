
import {Alert} from "react-bootstrap";


const WarningSign= (props)=>{
    
        return(

            
            ['danger'].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    This is a {variant} alert—{props.inputText}!
                </Alert>
                )
  ));

}

export default WarningSign;