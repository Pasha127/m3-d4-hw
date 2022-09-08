import {Card, Button, Modal} from "react-bootstrap";
import {Component, useState} from "react";

/* {bookList.filter(book => {book.title.toLowerCase().includes(this.props.query.toLowerCase())}).map((book, index) => (                    
    <Card 
    */                  
   class SingleBook extends Component{
       
       Example =() =>{
           const [show, setShow] = useState(false);
         
           const handleClose = () => setShow(false);
           const handleShow = () => setShow(true);}
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
                      <Button variant="primary" onClick={handleShow}>
                        Comments
                      </Button>
                      
                    </Card.Body>
                </Card>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comments:</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome to the comments! <br></br>There aren't any here yet. 😔 </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
               
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



