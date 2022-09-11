import {Card} from "react-bootstrap";
import {Component } from "react";
import CommentSection from "./CommentSection";

/* {bookList.filter(book => {book.title.toLowerCase().includes(this.props.query.toLowerCase())}).map((book, index) => (                    
    <Card 
    */                  
   class SingleBook extends Component{
       
       
       state={
           selected: false,
          
                
        }
        
        
        render (){
            return(
                <>
            <Card onClick={
                (e)=>{
                    this.state.selected === true ? this.setState({selected: false}): this.setState({selected: true});
                    console.log(this, "clicked card");  
                }
            } className={`ml-4 mb-4 ${this.state.selected ? "highlight" : "noHighlight"}`} style={{ width: '16rem' }} >
                
                <Card.Img variant="top" src={this.props.book.img} /> 
                    <Card.Body>
                      <Card.Title>{this.props.book.title}</Card.Title>
                      <Card.Text>
                        {this.props.book.category}
                      </Card.Text>  
                    </Card.Body>
                    {this.state.selected ? <div>Comments:</div> : <div> Click Card For Comments</div>}
                {this.state.selected && <CommentSection book={this.props.book}/>}
                </Card>
               
            </>
        );
    }
}
   

export default SingleBook;


//const SingleBook = ()=>{
    //    return(
        //        <>
        //            {bookList.map((book, index) => (
            //                <Card className="ml-4" style={{ width: '16rem' }} key={`book-${index}`}>
            //                <Card.Img variant="top" src={book.img} />
//                <Card.Body>
//                  <Card.Title>{book.title}</Card.Title>
//                  <Card.Text>
//                    {book.category}
//                  </Card.Text>
//                  <Button variant="primary">Go somewhere</Button>
//                </Card.Body>
//              </Card>
//            ))}
//        </>
//    );
//};



