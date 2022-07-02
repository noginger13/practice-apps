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

  address1Change(e) {
    e.preventDefault();
    this.setState({address1: event.target.value});
  }

  address2Change(e) {
    e.preventDefault();
    this.setState({address2: event.target.value});
  }

  cityChange(e) {
    e.preventDefault();
    this.setState({city: event.target.value});
  }

  stateChange(e) {
    e.preventDefault();
    this.setState({state: event.target.value});
  }

  zipcodeChange(e) {
    e.preventDefault();
    this.setState({zipcode: event.target.value});
  }

  phoneChange(e) {
    e.preventDefault();
    this.setState({phone: event.target.value});
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
      <h3>Shipping Information</h3>
      <form>
        <label>Address:
        <input type="text"
          name="address1"
          onChange={this.address1Change.bind(this)}></input>
        </label>
      <br></br>
        <label>
        <input type="text"
          name="address2"
          onChange={this.address2Change.bind(this)}></input>
        </label>
      <br></br>
       <label>City:
         <input
          type="text"
          name="city"
          onChange={this.cityChange.bind(this)}></input>
      </label>
      <br></br>
      <label>State:
        <input
          type="text"
          name="state"
          onChange={this.stateChange.bind(this)}></input>
      </label>
      <br></br>
      <label>Zipcode:
        <input
          type="text"
          name="zipcode"
          onChange={this.zipcodeChange.bind(this)}></input>
      </label>
      <br></br>
      <label>Phone Number:
        <input
          type="text"
          name="phone"
          onChange={this.phoneChange.bind(this)}></input>
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

export default FormTwo