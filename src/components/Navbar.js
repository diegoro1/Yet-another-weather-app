import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div className="search-box">
                
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search City..."
                    onChange={e => props.setQuery(e.target.value)}
                    value={props.query}
                    onKeyPress={props.search}
                />
            </div>
        </div>
    )
}
