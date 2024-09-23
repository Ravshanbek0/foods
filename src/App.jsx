import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Like from './pages/Like'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [likeData,setLikeData] = useState([])
  const [modeLike,setModLIke] =useState(false)
  return (
    <div>
      <BrowserRouter>
        <Navbar modeLike={modeLike} likeData={likeData} />
        <Routes>
          <Route path='/' element={<Cards setModLIke={setModLIke} likeData={likeData} setLikeData={setLikeData} />} />
          <Route path='/like' element={<Like likeData={likeData} setLikeData={setLikeData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App