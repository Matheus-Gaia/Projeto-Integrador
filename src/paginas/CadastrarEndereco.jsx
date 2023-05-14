import Button from "../components/Button"
import "./CadastrarEndereco.css"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const CadastrarEndereco = () => {

  const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm()
  const navigate = useNavigate();

  const checkCep = async (e) => {
    const cep = e.target.value.replace(/\D/g, "")
    if(cep.length === 8) {
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json()).then(data => {
        console.log(data)
        setValue('uf', data.uf)
        setValue('cidade', data.localidade)
        setValue('endereco', data.logradouro)
        setFocus('complemento')
      })
    }
  }

  const getUserAdress = (userAdress) => {
    localStorage.setItem("endereco", JSON.stringify({...userAdress, id:"1"}))
      console.log(userAdress)
      navigate("/home")
      alert("cadastro realizado")
  }

  return (
    <>
      <h1 className="endereco-h1">Cadastrar Endereço</h1>
      <form className="endereco-form">
        <label hmltfor={"cep"}>{"Cep"}</label>
        <input
          autoFocus
          className="input"
          type={"text"}
          id={"cep"}
          size="10" maxLength="9"
          placeholder={"25xxx050"}
          {...register("cep")}
          onBlur={checkCep}
        />
        <div className="selectBox">
          <div className='select-box'>
            <label htmlFor={"UF"}>UF</label>
            <input
              id={"UF"}
              type="text"
              placeholder="SP"
              className="pequeno input"
              {...register("uf")}
              readOnly
            />
          </div>
          <div className='select-box'>
            <label htmlFor={"cidade"}>Cidade</label>
            <input
              id={"cidade"}
              type="text"
              placeholder="São Paulo"
              className="grande input"
              {...register("cidade")}
              readOnly
            />
          </div>
        </div>
        <label hmltfor={"endereco"}>Endereço</label>
        <input
          className="input"
          type={"text"}
          id={"endereco"}
          placeholder={"Rua Abc"}
          {...register("endereco")}     
          readOnly    
        />
        <label hmltfor={"complemento"}>Complemento</label>
        <input
          className="input"
          type={"text"}
          name={"complemento"}
          id={"complemento"}
          placeholder={"complemento"}
          {...register("complemento")}
        />
        <Button
          text={"Finalizar Cadastro"}
          type={"submit"}
          width={"55vw"}
          onClick={handleSubmit(getUserAdress)}
        />
      </form>
    </>
  )
}

export default CadastrarEndereco