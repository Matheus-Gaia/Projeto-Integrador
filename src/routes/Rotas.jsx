import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Login from "../paginas/Login"
import Home from "../paginas/Home"
import Lista from "../paginas/Lista"
import Cadidatura from "../paginas/Candidatura"
import CriarConta from "../paginas/CriarConta"
import CadastrarEndereco from "../paginas/CadastrarEndereco"
/* import Sobre from "../paginas/Sobre" */
import NotFound from "../paginas/NotFound"

const Rotas = () => {
  const [cidade, setCidade] = useState()

  
  return (
    <>
        <Routes>
            <Route path="/lista" element={<Lista cidade={cidade} setCidade={setCidade}/>} />
            {/* <Route path="/lista/sobre" element={<Sobre />} /> */}
            <Route path="/" exact element={<Login />} />
            <Route path="/criarconta" exact element={<CriarConta />} />
            <Route path="/criarconta/cadastrarendereco" exact element={<CadastrarEndereco />} />
            <Route path="/home" exact element={<Home cidade={cidade} setCidade={setCidade}/>} />
            <Route path="/cadidatura" exact element={<Cadidatura />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </>
  )
}

export default Rotas