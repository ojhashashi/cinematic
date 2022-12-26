import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import SearchInput from './SearchInput';

function Header() {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.navbar');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg sticky-top bg-light1">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Cinematic</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Popular Movie</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/top-rated">Top Rated Movie</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/upcoming">Upcoming Movie</Link>
                            </li>

                        </ul>
                        <SearchInput />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;