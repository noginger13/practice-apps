import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import FormOne from "./components/Form1.jsx";
import FormTwo from "./components/Form2.jsx";
import FormThree from "./components/Form3.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
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
      form: 1
    }
  }

  componentDidMount(){
    let cookie = document.cookie;
    let crumb = cookie.split('=');
    this.setState({id: crumb[1]});
  }

  render() {
    const formNo = this.state.form;
    let form;
    if (formNo === 1) {
      form = <FormOne />;
    } else if (formNo === 2) {
      form = <FormTwo />;
    } else if (formNo === 3) {
      form = <FormThree />;
    }

    return (
    <div>
    <h2>Checkout App</h2>
      <FormOne />
      <FormTwo />
      <FormThree />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));