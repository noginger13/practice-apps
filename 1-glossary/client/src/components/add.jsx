import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'apple',
      definition: 'fruit'
    };
  }

  handleWordChange(e) {
    console.log('word', e.target.value);
    this.setState({word: e.target.value});
  }

  handleDefinitionChange(e) {
    console.log('definition', e.target.value);
    this.setState({definition: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var addWord = {};
    addWord.word = this.state.word;
    addWord.definition = this.state.definition;
    this.props.add(addWord);
  }

  render() {
    return (
      <div>
      <h4>Add a new word</h4>
      <label>Enter the word:
        <input
          type="text"
          name="word"
          onChange={this.handleWordChange.bind(this)}
          value={this.state.value}></input>
      </label>
        <br></br>
      <label>Enter the definition:
        <input
          type="text"
          name="definition"
          onChange={this.handleDefinitionChange.bind(this)}
          value={this.state.value}></input>
        <button onClick={this.handleSubmit.bind(this)}>
            Add
        </button>
      </label>
      </div>
    )
  }
}

export default Add;