import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {


    return (
        <div>

            <FontAwesomeIcon icon={faSearch} size="2x" />

        </div>
        
    )
}

export default SearchBar;