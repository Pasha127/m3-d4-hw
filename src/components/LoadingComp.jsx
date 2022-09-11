import {Spinner} from "react-bootstrap";
import {Component } from "react";
             
   class LoadingComp extends Component{
      render(){
        return(
            
            <div className="greyBg">
                <div className="w-100 justify-content-center position-absolute">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </div>
            
                


        )
      }
    }
export default LoadingComp