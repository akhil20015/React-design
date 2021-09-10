import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './SearchBar.css'

const SearchBar = () => {

    return(
        <div class="search-bar">
                <input class="search" type="text" placeholder="Search..."/>
                <FontAwesomeIcon className="search-icon" icon="search" ></FontAwesomeIcon>
        </div>
    );

}

export default SearchBar;