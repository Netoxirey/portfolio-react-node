import { useState, useEffect } from "react";


function Select({ options, placeHolder, label, setData }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setData(values);
  }, [values])
  
  const handleSelect = (e, value) => {
    e.preventDefault();

    const valueExist = values.some(currentValue => currentValue == value);

    if(!valueExist) {
      setValues([...values, value]);
    }

    
  }
  return (
    <div>
      <p>{ label }</p>
      <div className="select_input">
        { values.length > 0 ? values.map(value => (
          <button key={value} 
          className="btn">
            { value }
          </button>
        )) : placeHolder || "Select your options" }
        <div className="select_options">
          { options.map(option => (
            <button key={ option.label }
            className="btn_option"
            onClick={(e) => handleSelect(e, option.value)}
            >
              { option.label }
            </button>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Select