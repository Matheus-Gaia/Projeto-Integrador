import "./Button.css"
import { Link } from "react-router-dom"

const Button = ({ text, width, link, type, form, onClick }) => {
  return (
    <Link className="btn" to={link}>
      <button style={{width}} type={type} form={form} onClick={onClick}>{text}</button>
    </Link>
    
  )
}

export default Button