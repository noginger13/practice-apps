import React from "react";

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      email: '',
      password: '',
      address1: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      credit: '',
      expmon: '',
      expyr: '',
      cvv: '',
      billzip: '',
      form: 0
    }
  }

  render() {
    return (
    <form>
      <label>  </label>
    </form>
    )
  }
}

export default FormThree;