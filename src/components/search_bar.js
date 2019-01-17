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
   const {search} = this.state;
  return(
    <div className="search-bar">
     <input type="input" value={search} onChange={handleChange} />
    </div>
  )
}
}
export default SearchBar;
