
function Select({options}) {
  return (
    <div>
        <label htmlFor="technologies">Select the technologies</label>
        <select multiple id="technologies">
            {options?.map(option => (
                <option key={option.value} 
                value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Select