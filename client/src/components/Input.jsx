
function Input({name}) {
  return (
    <div className="input_text">
        <label htmlFor={name}>{name}</label>
        <input type="text" id={name.toLowerCase()} />
    </div>
  )
}

export default Input