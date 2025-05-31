import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import './Search.css';
const Search = ({searchTerm , setSearchTerm}) => {
 
const UserInput = (val) =>{
  setSearchTerm(val.target.value)
  console.log(searchTerm)
}

  return (
  
    <div className="SearchBox">
        <div className="UserInput">
            <input onChange={UserInput}  type="text" placeholder='Search a Plants, Trees , Seeds'/>
        </div>
        
<IoMdSearch size={28}/>
    
    </div>
   
  )
}

export default Search
