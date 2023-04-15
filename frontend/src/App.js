import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Studentlogin from './pages/studentspages/Studentlogin';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Studentlogin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
