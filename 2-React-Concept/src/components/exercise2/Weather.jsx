import React from 'react'

function Weather({temperature}) {
  if(temperature < 15) {
    return <div><h3>It's Cold</h3></div>
  } else if(temperature >= 15 && temperature < 25) {
    return <div><h3>It's Nice Weather</h3></div>
  } else {
    return <div><h3>It's Hot</h3></div>
  }
}

export default Weather