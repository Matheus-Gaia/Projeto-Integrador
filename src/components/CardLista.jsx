import "./CardLista.css"
/* import { AiOutlinePlusCircle } from 'react-icons/ai'
 */
const CardLista = ({ nome, cidade, uf, rua, complemento, tel }) => {
    return (
        <div className="card-box">
            <ul className="card-list">
                <li>{nome}</li>
                <li>{cidade} - {uf}</li>
                <li>{rua} - {complemento}</li>
                <li>{tel}</li>
            </ul>
            {/* <a href="" className="icon-plus" >
                <AiOutlinePlusCircle />
            </a> */}
        </div>
    )
}

export default CardLista