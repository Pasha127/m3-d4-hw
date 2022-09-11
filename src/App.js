import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import booksf from "./books/fantasy.json";
import booksh from "./books/history.json";
import booksho from "./books/horror.json";
import booksr from "./books/romance.json";
import bookss from "./books/scifi.json";
const books2 =booksf.concat( ...booksh,...booksho,...booksr,...bookss)


function App() {
  return (
    <div className="App">
      <WarningSign inputText="And this is an example!"/>
      <MyBadge inputText="ExampleTxt" />
      <div className="container">
        <div className='row'>
        <BookList books={books2}/>
        </div>
      </div>      
    </div>
  );
}

export default App;
