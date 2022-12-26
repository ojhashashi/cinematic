import React from "react";
import { imgpath } from "../config/api";
import { Link } from "react-router-dom";
import defaultMovieImg from '../default-img/no-poster-available.jpg'

export function useShow(records) {

    return (
        records && records.length > 0 && records.map((val, i) =>

            <div className="col-xl-3 col-6 movie-card" key={i}>
                <Link to={"/movie-detail/" + val.id} title={val.original_title}>
                    {val.poster_path ? <img src={imgpath + val.poster_path} className="img-fluid movie-img" alt={val.original_title} /> : <img src={defaultMovieImg} className="img-fluid movie-img" alt={val.original_title} />}
                </Link>
                <h6 className="movie-title"><Link to={"/movie-detail/" + val.id} title={val.original_title}>{val.original_title}</Link></h6>
                <p>Rating: <span className={val.vote_average >= 6 ? `text-success` : `text-danger`}><i className="bi bi-star-fill"></i> {val.vote_average}</span>/10</p>
            </div>
        )
    )
}

