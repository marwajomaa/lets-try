import React, { Component } from 'react';
import "./App.css"

class SearchBar extends Component {
  state = {
    search:''
  }

  handleChange =(e)=>{
    this.setstate({search: e.target.value})
    setTimeout(()=>console.log(this.state), 3000);
  }

  render(){
   const handleChange = this;

  return(
    <div className="search-bar">
     <input onChange={handleChange} />
     <p>{this.state.search}</p>
    </div>
  )
}
}
export default SearchBar;
