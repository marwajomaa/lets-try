import React, { Component } from 'react';
import "./App.css"

class SearchBar extends Component {
  state = {
    search:''
  }

  handleChange =(e)=>{
    const search = e.target.value;
    this.setState({search});
    this.props.onVideoSearch(this.state.search)
  }

  render(){
   const {handleChange} = this;

  return(
    <div className="search-bar">
     <input type="input" onChange={handleChange} />
    </div>
  )
}
}
export default SearchBar;
