import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from './img/logo.png';
class Search extends Component {
  render() {
    return <div className="search-text"> 
      <img src={ logo }/> 
      <div>Search Text ++</div> 
    </div>;
  }
}
ReactDOM.render( 
  <Search /> ,
  document.getElementById('root')
)