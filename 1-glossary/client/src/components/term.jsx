import React from "react";

class Term extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: '',
      _id: this.props.term._id
    }
  }
  handleWordEdit(e) {
    console.log('word', e.target.value);
    this.setState({word: e.target.value});
  }

  handleDefinitionEdit(e) {
    console.log('definition', e.target.value);
    this.setState({definition: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.update(this.state);
  }

  onDelete(e) {
    e.preventDefault();
    this.props.delete(this.state._id);
  }

  onEdit(e) {
    e.preventDefault();
    this.props.edit(this.state._id);
  }

  render(){
    if (this.props.term.update){
      return (
        <li key={this.props.term._id}>
          <b>{this.props.term.word}</b>
          : {this.props.term.definition}
          <br></br>
           <label>Enter the word:
            <input
              type="text"
              name="word"
              onChange={this.handleWordEdit.bind(this)}
              value={this.state.value}></input>
          </label>
            <br></br>
          <label>Enter the definition:
            <input
              type="text"
              name="definition"
              onChange={this.handleDefinitionEdit.bind(this)}
              value={this.state.value}></input>
            <button onClick={this.handleSubmit.bind(this)}>
                update
            </button>
          </label>
        </li>
      )
    } else {
      return (
        <li key={this.props.term._id}>
          <b>{this.props.term.word}</b>
          : {this.props.term.definition}
          <br></br>
          <button onClick={this.onEdit.bind(this)}>
              Edit
          </button>
          <button onClick={this.onDelete.bind(this)}>
              Delete
          </button>
        </li>
      )
    }
  }
}

export default Term;