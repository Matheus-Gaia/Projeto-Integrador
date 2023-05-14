import "./Input.css"

function Input({ id, placeholder, type, label, name }) {
  return (
    <>
      <label hmltfor={id}>{label}</label>
      <input className="input" type={type} name={name} id={id} placeholder={placeholder}  />
    </>
  )
}

export default Input