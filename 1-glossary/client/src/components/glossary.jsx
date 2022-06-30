import React from "react";
import Term from "./term.jsx";

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      this.props.glossary.map((word) => {
        return <Term term={word} />
      })
    )
  }
}

export default Glossary;