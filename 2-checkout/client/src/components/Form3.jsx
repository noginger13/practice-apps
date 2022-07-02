import React from "react";

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: '',
      expmon: '',
      expyr: '',
      cvv: '',
      billzip: '',
    }
  }
  //Text change handlers
  creditChange(e) {
    e.preventDefault();
    this.setState({credit: event.target.value});
  }

  expmonChange(e) {
    e.preventDefault();
    this.setState({expmon: event.target.value});
  }

  expyrChange(e) {
    e.preventDefault();
    this.setState({expyr: event.target.value});
  }

  cvvChange(e) {
    e.preventDefault();
    this.setState({cvv: event.target.value});
  }

  billzipChange(e) {
    e.preventDefault();
    this.setState({billzip: event.target.value});
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
      <h3>Payment Information</h3>
      <form>
        <label>Credit Card Number:
        <input type="text"
          name="credit"
          onChange={this.creditChange.bind(this)}></input>
        </label>
      <br></br>
        <label>Expiration Month:
        <input type="text"
          name="expmon"
          onChange={this.expmonChange.bind(this)}></input>
        </label>
        <label>Expiration Year:
        <input type="text"
          name="expyr"
          onChange={this.expyrChange.bind(this)}></input>
        </label>
      <br></br>
        <label>CVV:
        <input type="text"
          name="cvv"
          onChange={this.cvvChange.bind(this)}></input>
        </label>
      <br></br>
        <label>Billing Zipcode:
        <input type="text"
          name="billzip"
          onChange={this.billzipChange.bind(this)}></input>
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

export default FormThree