import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { imgpath, searchApi } from "../config/api";
import { Link } from "react-router-dom";
import defaultMovieImg from '../default-img/no-poster-available.jpg'

export default function SearchedMovie() {
    const location = useLocation();

    const [searchData, setSearchData] = useState([])
    var [pageno, setPageNo] = useState(1);
    const [paramData, setParamData] = useState('')

    useEffect(() => {
        setSearchData(location.state.jsonData)
        setParamData(location.state.paramData)
    }, [location.state.jsonData, location.state.paramData])


    let totalItem = 0;
    if (searchData.results != null) {
        totalItem = searchData.results.length
    } else {
        totalItem = 0
    }

    const totalPages = searchData.total_pages;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    async function handlerPaginate(ev) {
        ev.preventDefault();
        const pageno = ev.target.attributes.for.value;
        setPageNo(pageno)

        const searchUrl = searchApi + `page=${pageno}&query=${paramData}`;
        try {
            const response = await fetch(searchUrl);
            const json = await response.json();
            setSearchData(json)
        } catch (error) {
            console.log("error", error);
        }

    }

    return (
        <div className='container'>
            {totalItem > 0 ? (
                <nav className='example' aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        {
                            pages && pages.length > 0 && pages.map((val, i) =>
                                <li className="page-item" key={i}><a className="page-link" htmlFor={val} href="#" onClick={handlerPaginate}>{val}</a></li>
                            )
                        }
                        <li className="page-item">
                            <a className="page-link" >Next</a>
                        </li>
                    </ul>
                </nav>
            ) : (
                <p>No Data</p>
            )}
            <div className='row movies-row'>
                <h4 className='mt-3'>Total Search Item: {totalItem}</h4>
                {searchData.results && searchData.results.map((item, index) => {
                    return (
                        <>
                            <div className="col-xl-3 col-6 movie-card" key={index}>
                                <Link to={"/movie-detail/" + item.id}>
                                    {item.poster_path ? <img src={imgpath + item.poster_path} className="img-fluid movie-img" alt={item.original_title} /> : <img src={defaultMovieImg} className="img-fluid movie-img" alt={item.original_title} />}
                                </Link>
                                <h6 className="movie-title"><Link to={"/movie-detail/" + item.id} title={item.original_title}>{item.original_title}</Link></h6>
                                <p>Rating: <span className={item.vote_average >= 6 ? `text-success` : `text-danger`}><i className="bi bi-star-fill"></i> {item.vote_average}</span>/10</p>
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    )
}
