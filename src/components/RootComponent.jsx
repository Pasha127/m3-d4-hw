import {useState} from "react";
import BookList from "./BookList";
import CommentSection from "./CommentSection";


const RootComponent = ()=>{
   /*  state={
        cardId: ""
    } */
    const cardSelected= (id)=>{
        this.setState({cardId: `${id}`});
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
        <BookList cardSelected={this.cardSelected} books={this.props.books}/>        
        </div>
      </div>      
        <div className='homeCommentContainer'>
        <CommentSection book={this.state.cardId}/>
        </div>
    </div>
)}


    export default RootComponent