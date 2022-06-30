import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    };
  }

  // onWordChange(e) {
  //   e.preventDefault();
  //   this.setState{word: e.target.value};
  // }

  render() {
    return (
      <div>
      <h4>Add a new word</h4>
      <p>Enter the word:</p>
        <input type="text" name="word" default ="Add a new word"></input>
        <br></br>
      <p>Enter the definition:</p>
        <input type="text" name="definition" default ="Add a new word"></input>
        <br></br>
        <button>
          <span>
            Add
          </span>
        </button>
      </div>
    )
  }
}

export default Add;