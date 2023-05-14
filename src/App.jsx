import Rotas from "./routes/Rotas"
import "./App.css"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Rotas/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
