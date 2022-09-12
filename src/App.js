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
import RootComponent from './RootComponent';
const books2 =booksf.concat( ...booksh,...booksho,...booksr,...bookss)


function App() {
  return (
    <RootComponent books={books2}/>
      );
}

export default App;
