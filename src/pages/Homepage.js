import React, { useState, useEffect } from "react"
import Search from '../componenet/Search'
import Photoitem from '../componenet/Photoitem'
import Topbanner from '../componenet/Topbanner'


const Homepage = () => {

    let [photoData, setPhotoData] = useState(null)
    let [input, setInput] = useState('')
    let [page, setPage] = useState(2)

    const auth = '563492ad6f917000010000013353774982364af8a8efe6668b303825'
    const curatedURL = `https://api.pexels.com/v1/curated?per_page=16&page=1`
    const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=1`
    const vedioURL = 'https://api.pexels.com/videos/popular?per_page=1'

    const getApi = async (url) => {

        const dataFetch = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: auth
            }
        })
            .then(res => res.json())
            .then(data => data)
            .catch((err) => {
                console.log(err)
            })

        setPhotoData(dataFetch.photos)
    }

    const searchHandler = () => {
        setPage(2)
        getApi(searchURL)
    }


    const loadMoreHandler = async () => {
        let newUrl;
        if (input === "") {
            newUrl = `https://api.pexels.com/v1/curated?per_page=16&page=${page}`
        } else {
            newUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=${page}`
        }

        const dataFetch = await fetch(newUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: auth
            }
        })
            .then(res => res.json())
            .then(data => data)
            .catch((err) => {
                console.log(err)
            })

        setPhotoData(photoData.concat(dataFetch.photos))
        setPage(page + 1)

    }

    useEffect(() => {
        getApi(curatedURL)
    }, [])



    return (
        <div className="homepage">
            <div className="topBanner">
                <Topbanner auth={auth} vedioURL={vedioURL} />
                <Search searchHandler={searchHandler} setInput={setInput} />
            </div>
            <div className="content">
                {
                    photoData && photoData.map((item) => {
                        return (
                            <Photoitem data={item} key={item.id} />
                        )
                    })
                }
            </div>
            <div className="btnRow">
                <button className='more' onClick={loadMoreHandler}>Load More</button>
            </div>

        </div>
    )
}
export default Homepage