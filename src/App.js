import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/* import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'; */
import BookList from './components/BookList';
import booksf from "./books/fantasy.json";
import booksh from "./books/history.json";
import booksho from "./books/horror.json";
import booksr from "./books/romance.json";
import bookss from "./books/scifi.json";
import CommentSection from './components/CommentSection';
const books2 =booksf.concat( ...booksh,...booksho,...booksr,...bookss)


function App() {
  return (
    <div className="App d-flex flex-row">
      {/* <WarningSign inputText="And this is an example!"/>
      <MyBadge inputText="ExampleTxt" /> */}
      <div className="container  homeCardContainer">
        <div className='row'>
          <div className='col-7'>
            <div className='row'>
          </div>
        </div>
        <BookList books={books2}/>        
        </div>
      </div>      
        <div className='homeCommentContainer'><p>Test Div</p></div>
        {/* {this.state.selected && <CommentSection book={this.props.book}/>} */}
    </div>
      );
}

export default App;
