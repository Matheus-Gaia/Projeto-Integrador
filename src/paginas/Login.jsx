import Input from "../components/Input"
import Button from "./../components/Button"
import { Link } from "react-router-dom"
import "./Login.css"

const Login = () => {

  return (
    <>
      <img className='logo' src="src\imgs\Logo.png" alt="Logo" />
      <form className='login-form'>
        <Input
          id={"email"}
          type={"text"}
          placeholder={"abc@email.com"}
          label={"Email"}
        />
        <Input
          id={"senha"}
          type={"password"}
          placeholder={"Senha (8 digitos)"}
          label={"Senha"}
        />
        <Button
          text={"Login"}
          width={"75vw"}
        />
      </form>
      <div className='login-opt'>
        <a href="http://">Esqueceu a senha?</a>
        <p>ou</p>
        <Link to="/criarconta">Criar conta</Link>
      </div>
    </>
  )
}

export default Login