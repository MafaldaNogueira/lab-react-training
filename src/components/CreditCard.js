import React from 'react';

function CreditCard(props){
 
    return (


<div class="creditcard" style={{"backgroundColor": `${props.bgColor}`, "color": `${props.color}`}}>
    <p> type: {props.type} </p>
    <p> number: {props.number} </p>
    <p> expiration date: {props.expirationMonth} </p>
    <p> expiration year: {props.expirationYear} </p>
    <p> bank: {props.bank} </p>
    <p> owner: {props.owner} </p>
    <p> expiration year: {props.expirationYear} </p>




        </div>
        )
}

export default CreditCard; 