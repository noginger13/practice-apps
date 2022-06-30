import React from "react";

class Term extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: ''
    }
  }

  render(){
    return (
      <li key={this.props.term['_id'].toString()}>
        <b>{this.props.term.word}</b>
        : {this.props.term.definition}
        <br></br>
        <button>
          <span>
            Edit
          </span>
        </button>
        <button>
          <span>
            Delete
          </span>
        </button>
      </li>
    )
  }
}

export default Term;