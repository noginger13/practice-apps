import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Add from "./components/add.jsx";
import Search from "./components/search.jsx";
import Glossary from "./components/glossary.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: [{
        definition: "You can delete this sample with the buttons.",
        word: "Add a word to the glossary!",
        __v: 0,
        _id: "62bdb30d9469c31518268639"
      }]
    }
  }

  componentDidMount(){
    axios.get('/init')
    .then(({data}) => {
      this.setState(
        {glossary: data}
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Glossary App</h1>
        <br></br>
        <Add />
        <br></br>
        <Search />
        <br></br>
        <h4>Here's all the words you've saved:</h4>
        <Glossary glossary={this.state.glossary}/>
      </div>
    )
  };
}


ReactDOM.render(<App />, document.getElementById("root"));