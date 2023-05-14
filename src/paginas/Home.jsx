import Button from "../components/Button"
import { Link } from "react-router-dom"
import "./Home.css"
import instiuicoes from "../../data/data"
import { useState } from "react"

const Home = ({cidade, setCidade}) => {
    
    return (
        <>
            <img className='logo' src="src\imgs\Logo.png" alt="Logo" />
            <h3>Seja Bem-Vindo!</h3>
            <h4>Procure uma instituição para doação!</h4>
            <form className="home-form">
                <input
                autoFocus
                    className="input"
                    type={"text"}
                    id={"cidade"}
                    placeholder={"Cidade"}
                    onChange={e => setCidade(e.target.value)}
                    value={cidade}
                />
            </form>
            <Button
                text={"Pesquisar"}
                width={"50vw"}
                link={"/lista"}
            />
            <h4 className="home-texto">Quer se candidatar a receber uma doação?</h4>
            <Link className="home-link" to="/cadidatura">Clique aqui!</Link>
        </>
    )
}

export default Home