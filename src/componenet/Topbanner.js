import React, { useState, useEffect } from "react"


const Topbanner = ({ auth }) => {

    let [banner, setBanner] = useState(null)
    const curatedURL = 'https://api.pexels.com/v1/curated?per_page=1&page=5'

    const bannerFetchHandler = async () => {
        const dataFetch = await fetch(curatedURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: auth
            }
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch((err) => {
                console.log(err)
            })
        setBanner(dataFetch.photos)
    }

    useEffect(() => {
        bannerFetchHandler()
    }, [])



    return (
        <div className="banner">
            <div className="black"></div>
            {
                banner && banner.map((item) => {
                    return <img src={item.src.large2x} alt="" key={item.id} />

                })
            }

        </div>
    )
}
export default Topbanner