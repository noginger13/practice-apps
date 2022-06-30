import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  onSearchChange(e) {
    e.preventDefault();
    this.setState({search: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('search term: ', this.state.search);
    this.props.search(this.state.search);
  }

  render() {
    return (
      <div>
      <h4>Search</h4>
      <label>Search:
        <input
        type="text"
        name="search"
        onChange={this.onSearchChange.bind(this)}></input>
        <button onClick={this.onSubmit.bind(this)}>
          Search
        </button>
      </label>
      </div>
    )
  }
}

export default Search;