import React from "react";

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  //Text change handlers
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
    this.props.complete(this.state);
  }

  render() {
    return (
    <div>
      <br></br>
      <h3>Account Information</h3>
      <form>
        <label>Name:
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

export default FormOne;