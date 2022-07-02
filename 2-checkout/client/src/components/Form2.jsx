import React from "react";

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    }
  }

  nameChange(e) {
    e.preventDefault();
    this.setState({name: event.target.value});
  }

  emailChange(e) {
    e.preventDefault();
    this.setState({email: event.target.value});
  }

  passwordChange(e) {
    e.preventDefault();
    this.setState({password: event.target.value});
  }


  //Submit
  handleClick(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
    <div>
      <br></br>
      <form>
        <label>Address:
        <input type="text"
          name="name"
          onChange={this.nameChange.bind(this)}></input>
        </label>
      <br></br>
       <label>Email:
         <input
          type="email"
          name="email"
          onChange={this.emailChange.bind(this)}></input>
      </label>
      <br></br>
      <label>Password:
        <input
          type="password"
          name="password"
          onChange={this.passwordChange.bind(this)}></input>
      </label>
        <br></br>
        <button onClick={this.handleClick.bind(this)}>
          Next
        </button>
      </form>
    </div>
    )
  }
}

export default FormTwo;