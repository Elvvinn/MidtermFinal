import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './products.scss'
function ProductSection() {


    const [datam, setDatam] = useState([])
    const [search, setSearch] = useState("")


    function getfunc() {
        axios.get("http://localhost:8380/products").then(({ data }) => {
            setDatam(data);
        });
    }


    useEffect(() => {
        getfunc();
    }, [])


    const deleteclick = (_id) => {
        axios.delete(`http://localhost:8380/products/${_id}`).then(() => {
            getfunc();
        })
    }


    const increasefunc = () => {
        setDatam([...datam.sort((a, b) => (a.price > b.price) ? 1 : (b.price > a.price) ? -1 : 0)])
    }


    const decreasefunc = () => {
        setDatam([...datam.sort((a, b) => (b.price > a.price) ? 1 : (a.price > b.price) ? -1 : 0)])
    }

    return (
        <section className='productsec'>

            <h2 className='ourproducttext'> OUR PRODUCTS </h2>
            <div className='sortbtns'>
                <button className='btnsort' onClick={() => increasefunc()}> Increase </button>
                <button className='btnsort' onClick={() => decreasefunc()}> Decrease </button>
            </div>
            <input className='searchinp' placeholder='search items' onChange={(e) => { setSearch(e.target.value) }} />

            <div className='generalproduct'>

                {

                    datam.filter(data => data.name.toLowerCase().includes(search.toLowerCase())).map((element) => (

                        <div className='productdiv'>
                            <img className='imgprod' src={element.imageUrl} />
                            <h2> {element.name} </h2>
                            <p> {element.price} $ </p>
                            <Link to={`/detail/${element._id}`}> <button className='btnmore'> Learn More </button> </Link>
                            <button className='btnmore' onClick={() => { (deleteclick(element._id)) }}> Delete This item </button>
                        </div>

                    )
                    )
                }


            </div>


        </section>
    )
}

export default ProductSection