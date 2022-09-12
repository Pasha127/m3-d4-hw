import {Component} from "react";
import BookList from "./components/BookList";
import CommentSection from "./components/CommentSection";


class RootComponent extends Component{
    state={
        cardId: ""
    }
    cardSelected= (id)=>{
        this.setState({cardId: `${id}`});
        console.log(`card selected ${id} at root`)
    }
render(){
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
        <div className='homeCommentContainer'><p>Test Div</p></div>
        <CommentSection book={this.state.cardId}/>
        
    </div>
)}}


    export default RootComponent