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

  onDelete(e) {
    e.preventDefault();
    this.props.delete(this.state._id);
  }

  onEdit(e) {
    e.preventDefault();
    this.props.edit(this.state._id);
  }

  render(){
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

export default Term;