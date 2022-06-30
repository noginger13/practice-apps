import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  // onWordChange(e) {
  //   e.preventDefault();
  //   this.setState{word: e.target.value};
  // }

  render() {
    return (
      <div>
      <h4>Search</h4>
      <p>Enter the word you're looking for:</p>
        <input type="text" name="search" default ="Search a new word"></input>
        <br></br>
        <button>
          <span>
            Search
          </span>
        </button>
      </div>
    )
  }
}

export default Search;