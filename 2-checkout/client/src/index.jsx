import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import FormOne from "./components/Form1.jsx";
import FormTwo from "./components/Form2.jsx";
import FormThree from "./components/Form3.jsx";
import FinalConfirmation from "./components/FinalConfirmation.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      credit: '',
      expmon: '',
      expyr: '',
      cvv: '',
      billzip: '',
      form: 1
    }
  }

  componentDidMount(){
    let cookie = document.cookie;
    let crumb = cookie.split('=');
    this.setState({id: crumb[1]});
  }

  formOneComplete(formObj) {
    this.setState(formObj);
    this.setState({form: 2});
  }

  formTwoComplete(formObj) {
    this.setState(formObj);
    this.setState({form: 3});
  }

  formThreeComplete(formObj) {
    this.setState(formObj);
    this.setState({form: 4});
  }

  confirmationComplete(e) {
    e.preventDefault();
    axios.post('/api', this.state)
    .then((res) => {
      console.log(res);
      window.alert('Thanks! Order submitted!')
    })
    .catch((err) => console.error(err))
  }

  render() {
    const formNo = this.state.form;
    let form;
    if (formNo === 1) {
      form = <FormOne complete={this.formOneComplete.bind(this)} />;
    } else if (formNo === 2) {
      form = <FormTwo complete={this.formTwoComplete.bind(this)} />;
    } else if (formNo === 3) {
      form = <FormThree complete={this.formThreeComplete.bind(this)} />;
    } else if (formNo === 4) {
      form = <FinalConfirmation information={this.state} confirmation={this.confirmationComplete.bind(this)} />;
    }

    return (
    <div>
    <h2>Checkout App</h2>
      {form}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));