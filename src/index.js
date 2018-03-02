const React = require('react');
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyDqejb164mXGK-igUstESqPUxVsMKHBcmU';

const App = () => <div>FF<SearchBar /></div>;

ReactDOM.render(<App />, document.querySelector('.container')); 
