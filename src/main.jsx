import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cadastrar from './Cadastrar/cadastrar'
import Detalhe from './Detalhe/detalhe'
import Destaque from './Destaque/Destaque'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<Cadastrar />}></Route>
        <Route path="/Destaque" element={<Destaque />}></Route>
        <Route path="/detalhe/:id" element={<Detalhe />}></Route>
        <Route path="/" element={<Home />}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
