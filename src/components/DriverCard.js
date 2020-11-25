import React from 'react';

function DriverCard(props) {
  return (

    <div class="driverCard">
       <p> <img src={props.img} /> </p>
      <p>{props.name}</p>
      <p>{props.rating}</p>
      <p>  {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
