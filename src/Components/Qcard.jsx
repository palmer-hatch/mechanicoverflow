import React from 'react'



function Qcard({data}) {
  return (
    <div>
        <h3>{data.qtext}</h3>
        
        <button>Answer This Question</button>
    </div>
  )
}

export default Qcard