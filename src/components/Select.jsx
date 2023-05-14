import './Select.css'
import instiuicoes from "../../data/data"

const Select = ({ id, value, name }) => {
    const inst = () => instiuicoes.map(e => {
        <option value={e.endereco.cidade}>{e.endereco.cidade}</option> 
    })
    return (
        <div className='select-box'>
            <label htmlFor={id}>{id}</label>
            <select id={id} className={name}>
            <option value={inst}>{}</option>
            </select>
        </div>
    )
}

export default Select