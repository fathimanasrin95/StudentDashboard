import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProjectTopiclist from './components/ProjectTopiclist'
import ProjectDescription from './components/ProjectDescription'



function App() {
 
 return (
    <>
 
 <Routes>
 
<Route path='/' element={<ProjectTopiclist/>}></Route>
<Route path='/description' element={<ProjectDescription/>}></Route>

 </Routes>



    </>
  )
}

export default App
