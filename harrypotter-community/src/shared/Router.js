import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DormBoard from '../components/DormBoard'
import FullBoard from '../components/FullBoard'
import SingleBoard from '../pages/SingleBoard'
import CreatePost from '../pages/CreatePost'
import Join from '../pages/Join'
import Login from '../pages/Login'
import Card from '../components/Card'
import EditPost from '../pages/EditPost'



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='join' element={<Join />}/>
        <Route path='create_post' element={<CreatePost />}/>
        <Route path='/EditPost/:id' element={<EditPost/>}/>
        <Route path='/board' element={<FullBoard/>}></Route>
        <Route path='/board/:id' element={<SingleBoard/>}></Route>
        <Route path='card' element={<Card />}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default Router