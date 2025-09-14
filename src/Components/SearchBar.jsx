import React from "react";

const SearchBar = ({searchTerm, setSearchTerm}) => {
  return(
    <div className="d-flex justify-content-center my-4 w-100">
      <input type="text"className="form-control w-50"
      placeholder="Search phone...." value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}>
        
      </input>
    </div>
  )
}
export default SearchBar;