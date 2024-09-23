import React from 'react'
import '../App.css'
import { GrFavorite } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
function Navbar({likeData,modeLike}) {

    return (
        <div className='nav'>
            <div className="container">
                <nav className="navbar">
                    <NavLink to="/" className="navbar-brand">delicious</NavLink>
                    
                    <NavLink to="/like" className='saved' >{ modeLike && <div className="cardHeartQoshildi">+1</div>} <span>{likeData.length}</span><GrFavorite/> favourites</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navbar