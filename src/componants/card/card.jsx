import React from 'react'

const card = (prop) => {
  return (
    <div className='card'>
      <h4>{prop.title}</h4>
      <p>Matric: {prop.metric}</p>
      <span>KPR: {prop.KPR_Matric}</span>
      <p>Visitors: {prop.visitors}</p>
      <sapn>{prop.location}</sapn>
      <p><b>{prop?.Price}</b></p>
    </div>
  )
}

export default card