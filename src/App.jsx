import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Website from './components/Website'
import FormFieldEmpty from './components/FormFieldEmpty'
import Success from './components/Success'
import Documentation from "./components/Documentation"
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Website/>}></Route>
        <Route path='/FormField' element={<FormFieldEmpty/>}></Route>
        <Route path='/success' element={<Success/>}></Route>
        <Route path='/Documentation' element={<Documentation/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
