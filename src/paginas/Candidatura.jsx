import Button from "../components/Button"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import "./Candidatura.css"
import { Link } from "react-router-dom"


const Candidatura = () => {
  return (
    <>  
        <Link to="/home"><AiOutlineArrowLeft className="icon-voltar"/></Link>
        <img className='logo' src="src\imgs\Logo.png" alt="Logo" />
        <h3 className="candidatura-texto">Escreva um pequeno texto sobre você: </h3>
        <textarea className="textarea" name="" id="" cols="30" rows="15"></textarea>
        <Button
            text={"Enviar"}
            width={"50vw"}
            link={"/home"}
        />
    </>
  )
}

export default Candidatura