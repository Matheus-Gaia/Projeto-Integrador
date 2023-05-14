import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ({ title, link }) => {
    return (
        <header className="header">
            <Link to={link}>
                <AiOutlineArrowLeft className="icon-voltar" />
            </Link>
            <h3 className="header-title">{title}</h3>
        </header>
    )
}

export default Header