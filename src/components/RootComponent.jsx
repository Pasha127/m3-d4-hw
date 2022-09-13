import {useState} from "react";
import BookList from "./BookList";
import CommentSection from "./CommentSection";


const RootComponent = (props)=>{
   /*  state={
        cardId: ""
    } */
    const [cardId, setCardId] = useState("");
    const cardSelected= (id)=>{
        setCardId({cardId: `${id}`});
        console.log(`card selected ${id} at root`)
    }

    return(
<div className="App d-flex flex-row">
      {/* <WarningSign inputText="And this is an example!"/>
      <MyBadge inputText="ExampleTxt" /> */}
      <div className="container  homeCardContainer">
        <div className='row'>
          <div className='col-7'>
            <div className='row'>
          </div>
        </div>
        <BookList cardSelected={cardSelected} books={props.books}/>        
        </div>
      </div>      
        <div className='homeCommentContainer'>
        <CommentSection book={cardId}/>
        </div>
    </div>
)}


    export default RootComponent