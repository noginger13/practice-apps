import React from "react";
import Term from "./term.jsx";

function Glossary(props) {
  return (
      <ol>
        {props.glossary.map((word) => {
          return <Term
            key={word._id}
            term={word}
            delete={props.delete}
            edit={props.edit}
            update={props.update}
            />
        })}
      </ol>
    )
}

export default Glossary;