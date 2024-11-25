
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './components/Home'


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' Component={Home}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
