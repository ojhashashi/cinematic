import React, { useState } from 'react';
import { searchApi } from '../config/api';
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
    const [searchInput, setSearchInput] = useState('');

    const navigate = useNavigate();

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const searchUrl = searchApi + `page=1&query=${searchInput}`;
        try {
            const response = await fetch(searchUrl);
            const json = await response.json();
            navigate('/searched-movie', {
                state: {
                    jsonData: json,
                    paramData: `${searchInput}`,
                },
            });
        } catch (error) {
            console.log("error", error);
        }

    }

    // var ans_api = useCrud(`movie?api_key=${apikey}&language=en-US&query=${name}& page=1`);
    // console.log(ans_api['results']);

    // var result_grid = useShow(ans_api['results']);
    // console.log(result_grid);

    return (
        <form className="d-flex" role="search" method='post'>
            <input className="form-control me-2" type="search" placeholder="Movie Name" aria-label="Search" onChange={(e) => searchItems(e.target.value)} />
            <button className="btn btn-outline-success" type="button" onClick={handleSubmit}>Search</button>
        </form>
    )
}
