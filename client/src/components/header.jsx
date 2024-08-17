import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">Nomad Notes</Link>
            <nav>
            <div className="dropdown">
                <button className="dropbtn">Explore</button>
            </div>
            </nav>
        </header>
    );
};

export default Header;