import React from 'react'
import Card from './Card'
import { useFetch } from '../../hook/useFetch'

function Cards({ setLikeData, likeData ,setModLIke}) {
    const data = useFetch('https://api.spoonacular.com/recipes/random?apiKey=a6eb192d1786446aa2a7789fa1705a1c&number=28')
    return (
        <div className='cards'>
            <div className="container">
                <h1 className="Foods">Foods</h1>
                <div className="card-box">
                    {data.recipes?.map((item) => {
                        return <Card setModLIke={setModLIke} data={data} setLikeData={setLikeData} likeData={likeData} item={item} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cards