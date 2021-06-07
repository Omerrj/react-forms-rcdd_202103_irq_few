import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

export default function() {
  
  const [state,setState]=useState({
    firstName: "",
    lastName: "",
  }
)


  const handleChange = event => {
    setState({
      [event.target.name]: event.target.value
    })
  }

    return (
      <div>
        <Form
          formData={state}
          handleChange={handleChange}
        />
        <DisplayData formData={state} />
      </div>
    )

}
