import React from 'react'

function Acard({data}) {
  return (
    
    <div>
    <h3>{data.question}</h3>
    {data.answers.map((e,i) =>{
        return  <h4>{e}</h4> 
    })} <button>answer question?</button>
    
</div>
  )
}

export default Acard