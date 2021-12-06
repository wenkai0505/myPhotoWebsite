import React from "react"
import { Link } from 'react-router-dom';


const Photoitem = ({ data }) => {

    return (
        <div className="photoItem" >
            <div className="name">Author：{data.photographer}</div>
            <div className="photoBg">
                <img src={data.src.large} alt="" />
            </div>
            <Link target="_blank" to={data.src.large2x} className="downLink">Download the Photo</Link>
            <div className="source">Photo provided by Pexels </div>

        </div >

    )
}

export default Photoitem