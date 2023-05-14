import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import "./CriarConta.css"


const CriarConta = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate();

    const getUserData = (userData) => {
        localStorage.setItem("user", JSON.stringify({...userData, id:"1"}))
        navigate("/criarconta/cadastrarendereco")
    }
    
    return (
        <>
            <h1 className="criar-h1">Criar Conta</h1>
            <form className="criar-form" id="userForm">
                <label hmltfor={"nome"}>{"Nome"}</label>
                <input 
                    className="input" 
                    type={"text"}  
                    id={"nome"} 
                    placeholder={"João Silva"} 
                    { ...register("nome") } 
                />
                <label hmltfor={"email"}>{"Email"}</label>
                <input 
                    className="input" 
                    type={"text"}  
                    id={"email"} 
                    placeholder={"abc@email.com"} 
                    { ...register("email") } 
                />
                <label hmltfor={"senha"}>{"Senha"}</label>
                <input 
                    className="input" 
                    type={"password"}  
                    id={"senha"} 
                    placeholder={"xxxxxxxx"} 
                    { ...register("senha") } 
                />
                <label hmltfor={"Csenha"}>{"Confirmar Senha"}</label>
                <input 
                    className="input" 
                    type={"password"}  
                    id={"Csenha"} 
                    placeholder={"xxxxxxxx"} 
                    { ...register("Csenha") } 
                />
                <Button
                    text={"Criar Conta"}
                    width={"55vw"}
                    type={"submit"}
                    form={"userForm"}
                    onClick={handleSubmit(getUserData)}
                />
            </form>
        </>
    )
}

export default CriarConta