import React from "react";
import Term from "./term.jsx";

function Glossary(props) {
  return (
      <ol>
        {props.glossary.map((word) => {
          return <Term
            term={word}
            delete={props.delete}
            />
        })}
      </ol>
    )
}

export default Glossary;