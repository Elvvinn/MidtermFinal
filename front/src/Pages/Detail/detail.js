import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
function DetailPage() {

    const [datam, setDatam] = useState([])
    let { _id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8380/products/${_id}`).then(({ data }) => {
            setDatam(data);
        });
    }, [])

    return (

        <>

            <Helmet>
                <title> Detail  </title>
            </Helmet>

            <div>
                <img src={datam.imageUrl} />
                <h2> {datam.name} </h2>
                <p> {datam.price} </p>
                <Link to={"/"}> <button> Go Home </button> </Link>
            </div>
        </>
    )
}

export default DetailPage