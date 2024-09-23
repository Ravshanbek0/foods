import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Card({ setModLIke, data, item, likeData, setLikeData }) {
    const [like, setLike] = useState(true)
    function addLike(idProduct) {
        const newLikeD = data.recipes.filter((item) => {
            return item.id == idProduct
        })
        const isObject = likeData.some((obj) => {
            return Object.keys(obj).every((key) => obj[key] === newLikeD[key])
        })
        if (!isObject) {
            setLikeData([...likeData, newLikeD])

        } else {
            console.log(likeData);
            const likeDt2 = likeData.filter((item) => {
                return item[0].id != idProduct
            })
            setLikeData(likeDt2); 
        }

    }
    return (
        <div className='card'>
            
            <span className="card-icon" onClick={() => {
                setLike(!like)
                setModLIke(true)
                addLike(item.id)
            }}>
                {like ? <FaRegHeart /> : <FaHeart />}
            </span>
            <img src={item.image} alt="" />
            <div className="mode-night"></div>
            <p className="title">{item.title}</p>
        </div>
    )
}

export default Card