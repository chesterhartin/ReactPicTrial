import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar'

class App extends React.Component{
  
    // required by React
    render()
    {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
               <SearchBar></SearchBar>
            </div>
        );
    }
};

export default App; 