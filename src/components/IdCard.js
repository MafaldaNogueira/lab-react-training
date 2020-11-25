import React from 'react'

function IdCard(props) {

    const formatedDate  = props.birth.toLocaleDateString('en-EN',{
weekday: 'short',
month: 'short',
day: '2-digit',
year: 'numeric'

    } )

    return (
        <div className="container">
 
    <p> First Name: {props.firstName} </p>
    <p> last Name: {props.lastName} </p>
    <p> Gender: {props.gender} </p>
    <p> Height: {props.height} m</p>
    <p> Birth: {formatedDate}</p>
    <p> <img src={props.picture} /> </p>

        </div>
        
    )
}

export default IdCard;