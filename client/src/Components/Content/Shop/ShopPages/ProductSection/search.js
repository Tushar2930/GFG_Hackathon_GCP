import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import "./search.css"


function SearchBar(props) {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSearch = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            console.log("Enter is pressed")
            // Call your desired function here
        }
        props.onSearch(searchText);
    }

    return (
        <div className='row'>
            <div class="row justify-content-center align-items-center">
              <div class="col-md-6">
                    <div class="form">
                        <i class="fa fa-search"></i>
                        <input type="text" value={searchText} onKeyDown={handleSearch} onChange={handleInputChange} class="form-control form-input my-0 py-0" placeholder="Search anything..."/>
                        <span class="left-pan"><i class="fa fa-microphone"></i></span>
                    </div>
              </div>
            </div>
        </div>
    )
}

export default SearchBar;