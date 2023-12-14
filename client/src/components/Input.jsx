
function Input({name, handleChange}) {
  return (
    <div className="input_text">
        <label htmlFor={name}>{name}</label>
        <input type="text" id={name.toLowerCase()} onChange={handleChange} />
    </div>
  )
}

export default Input