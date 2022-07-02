import React from "react";

function FinalConfirmation(props) {

  return(
    <div>
      <br></br>
      <h3> Final Confirmation</h3>
      <br></br>
      <p>Name: {props.information.name}</p>
      <p>Email: {props.information.email}</p>
      <p>Address: {props.information.address1}</p>
      <p>Address: {props.information.address2}</p>
      <p>City: {props.information.city}</p>
      <p>State: {props.information.state}</p>
      <p>Zipcode: {props.information.zipcode}</p>
      <p>Phone: {props.information.phone}</p>
      <p>Credit: {`************${props.information.credit.substring(props.information.credit.length - 4, props.information.credit.length)}`}</p>
      <p>Billing Zip: {props.information.billzip}</p>
      <button onClick={props.confirmation}>
        Purchase
      </button>
    </div>
  )
}

export default FinalConfirmation