import React, { useState } from 'react'


const SearchBar = ({handleSubmitQuery}) => {
    const [querySB, setQuery] = useState('');

    const onSubmitQuery = (e) => {
        e.preventDefault();
        handleSubmitQuery(querySB);
        setQuery('')
    }

    const onChngQuery = (e) => {
        setQuery(e.target.value);
    }

    return (
    <header className="Searchbar">
    <form className="SearchForm" onSubmit ={onSubmitQuery}>
    <button type="submit" className="SearchForm-button">
    <span className="SearchForm-button-label">Search</span>
    </button>

    <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange = {onChngQuery}
    />
    </form>
    </header>
    )
}

export default SearchBar;