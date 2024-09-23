import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

function Like({ likeData, setLikeData }) {
    console.log(likeData[0]);
    function removeTrush(id) {
        const newL2DAta = likeData.filter((item) => {
            return item[0].id != id
        })
        setLikeData(newL2DAta)
    }
    return (
        <div className="container">

            {
                likeData.length > 0 ? likeData?.map((item) => {
                    return <div className="like">
                        <img src={item[0].image} alt="" />
                        <h1>{item[0].title}</h1>
                        <span className='like-tresh' onClick={() => { removeTrush(item[0].id) }}> <FaRegTrashAlt /> </span>
                    </div>
                }): <p className='hech-qanday'>Hech qanday ma'lumot yo'q.</p>
            }
        </div>
    )
}

export default Like