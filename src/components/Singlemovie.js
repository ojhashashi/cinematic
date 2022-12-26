import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCrud } from '../customHook/Crud'
import { api, apikey, imgpath } from '../config/api'
import defaultCastImg from '../default-img/Unknown_person.jpg'
import dateFormat, { masks } from "dateformat";

export default function Singlemovie() {

    const [casts, setCasts] = useState([]);

    var { id } = useParams();

    var ans_api = useCrud(`${id}?api_key=${apikey}&language=en-US`);


    useEffect(() => {
        const url = `${api}${id}/credits?api_key=${apikey}&language=en-US`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setCasts(json.cast);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            <div className="row movie-detail">
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-xl-3 col-4">
                            <img src={imgpath + ans_api.poster_path} className="img-fluid poster-img" alt={ans_api.poster_path} />
                        </div>
                        <div className="col-xl-9 col-8">
                            <h4>{ans_api.original_title}</h4>
                            <p><span className='fw-bold'>Rating: </span> <span className={ans_api.vote_average >= 6 ? `text-success` : `text-danger`}><i className="bi bi-star-fill"></i> {ans_api.vote_average}</span>/10</p>
                            <p><span className='fw-bold'>Duration: </span><span className='duration-time'> {ans_api.runtime} min <i class="bi bi-clock-fill"></i></span></p>
                            <p><span className='fw-bold'>Release Date: </span>{ans_api.release_date && dateFormat(new Date(ans_api.release_date), 'ddd mmm dS, yyyy')}</p>
                            <p><span className='fw-bold'>Genre: </span>
                                {ans_api.genres?.map((item, i) => {
                                    return (
                                        <span key={i} className="badge bg-primary text-wrap m-1"> {item.name}</span>
                                    )
                                })}
                            </p>

                        </div>
                    </div><br />
                    <h5>Overview</h5>
                    <p>{ans_api.overview}</p>
                </div>
                <div className="col-xl-6">
                    <img src={imgpath + ans_api.backdrop_path} className="img-fluid backdrop-img" alt={ans_api.backdrop_path} />
                </div>
            </div>
            <div className="row cast-row">
                <h2 className='cast-title'>Cast</h2>
                {casts.map((castData, i) => {
                    return (
                        <div key={i} className="col-xl-2 col-6 movie-cast">
                            {castData.profile_path ? <img src={imgpath + castData.profile_path} className="img-fluid movie-img" alt={castData.name} /> : <img src={defaultCastImg} className="img-fluid movie-img" alt={castData.name} />}
                            <b>{castData.name}</b><br />
                            <span><b>Character :</b> {castData.character}</span>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
