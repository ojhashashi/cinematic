import React, { useEffect, useState } from 'react'
import { useCrud } from '../customHook/Crud'
import { apikey, perPage } from '../config/api'
import { useShow } from '../customHook/Show';
import { Link, useParams } from 'react-router-dom';


export default function Upcoming() {
    const { id } = useParams();

    const ans_api = useCrud(`upcoming?api_key=${apikey}&language=en-US&page=${id}`);

    const result_grid = useShow(ans_api['results']);

    var pages = ans_api['total_pages'];
    if (pages > 0) {
        var msg = [];
        for (var i = 1; i <= 10; i++) {
            msg.push(<li class="page-item"><Link class="page-link" to={"/upcoming/" + i}>{i}</Link></li >)
        }
        console.log(msg);
    }

    return (
        <div className='container'>
            <div className='container'>
                <h1> Top Rated Movies </h1>

                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>


                        {
                            msg && msg.length > 0 && msg.map(val =>

                                <>
                                    {val}
                                </>
                            )
                        }

                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                <h4> Page No : {id}</h4>
                <div className='row movies-row'>
                    {result_grid}
                </div>

            </div>
        </div>
    )
}
