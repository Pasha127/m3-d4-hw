import {Card, Button} from "react-bootstrap";
import {Component} from "react";

/* {bookList.filter(book => {book.title.toLowerCase().includes(this.props.query.toLowerCase())}).map((book, index) => (                    
    <Card 
      */                  
class SingleBook extends Component{

    state={
        selected: false        
    }
    
    render (){
        return(
            <>
            <Card onClick={
        ()=>{
            this.setState({selected: true});
            console.log(this);
        }
    } className="ml-4" style={{ width: '16rem' }} >
                <Card.Img variant="top" src={this.props.book.img} className={this.state.selected ? "highlight" : "noHighlight"} /> :
                    <Card.Body>
                      <Card.Title>{this.props.book.title}</Card.Title>
                      <Card.Text>
                        {this.props.book.category}
                      </Card.Text>
                      
                    </Card.Body>
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