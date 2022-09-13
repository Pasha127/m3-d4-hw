import {Card} from "react-bootstrap";
import {useState} from "react";
import CommentSection from "./CommentSection";

/* {bookList.filter(book => {book.title.toLowerCase().includes(this.props.query.toLowerCase())}).map((book, index) => (                    
    <Card 
    */                  
    const SingleBook= (props)=>{
       
       
       /* state={
           selected: false,
          
                
        } */
        const [selected, setSelected] = useState(false);
        
        
            return(
                <>
            <Card onClick={
                (e)=>{
                    selected === true ? setSelected( false): setSelected( true);
                    console.log(this, "clicked card"); props.cardSelected(props.book.asin);  
                }
            } className={`ml-4 mb-4 ${selected ? "highlight" : "noHighlight"}`} style={{ width: '16rem' }} >
                
                <Card.Img variant="top" src={props.book.img} /> 
                    <Card.Body>
                      <Card.Title>{props.book.title}</Card.Title>
                      <Card.Text>
                        {props.book.category}
                      </Card.Text>  
                    </Card.Body>
                    {selected ? <div></div> : <div> Click Card For Comments</div>}
                
                </Card>
               
            </>
        );
    
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



