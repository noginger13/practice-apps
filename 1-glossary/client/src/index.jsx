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
    this.getAll();
  }

  add(wordObj){
    axios.post('/add', wordObj)
    .then()
    .catch((err) => {
      console.error('Failed to add word to glossary.')
    })
    .then(() => {
      this.getAll();
    })
    .catch((err) => {
      console.error('Failed to update glossary.')
    })
  }

  delete(_id){
    axios.post('/del', {_id})
    .then()
    .catch((err) => {
      console.error('Failed to delete word.')
    })
    .then(() => {
      this.getAll();
    })
    .catch((err) => {
      console.error('Failed to update glossary.')
    })
  }

  edit(_id, word, definition){
    var updateObj = {word, definition, _id}
    axios.post('/edit', updateObj)
    .then()
    .catch((err) => {
      console.error('Failed to edit the word');
    })
    .then(() => {
      this.getAll();
    })
    .catch((err) => {
      console.error('Failed to update glossary.')
    })
  }

  getAll(){
    axios.get('/init')
    .then(({data}) => {
      this.setState({glossary: data})
    })
    .catch((err) => {
      console.error('Failed to get glossary data.')
    })
  }

  search(searchTerm){
    let copyGloss = this.state.glossary.slice();
    let results = [];
    for (var term of copyGloss) {
      if (term.word.indexOf(searchTerm) !== -1) {
        results.push(term);
      } else if (term.definition.indexOf(searchTerm) !== -1) {
        results.push(term);
      }
    }
    this.setState({glossary: results})
  }

  render() {
    return (
      <div>
        <h1>Glossary App</h1>
        <br></br>
        <Add add={this.add.bind(this)}/>
        <br></br>
        <Search
          search={this.search.bind(this)}
        />
        <br></br>
        <h4>Glossary</h4>
        <Glossary
          glossary={this.state.glossary}
          delete={this.delete.bind(this)}
          />
      </div>
    )
  };
}


ReactDOM.render(<App />, document.getElementById("root"));