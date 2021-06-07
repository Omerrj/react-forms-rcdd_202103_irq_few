import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

export default function() {
  
  const [state,setState]=useState({
    firstName: "",
    lastName: "",
  }
)
  state = {
    firstName: "",
    lastName: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}

export default ParentComponent;