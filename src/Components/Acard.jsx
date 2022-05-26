import { Button, Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'

function Acard({data}) {
  return (
    
    <div>
      <Card >
        <CardActionArea style={{backgroundColor: "#B7BDB7"}}>
    <Typography variant='h6'>{data.question}</Typography>
    {data.answers.map((e,i) =>{
        return  <h4>{e}</h4> 
    })} <Button variant='contained'>Answer This Question</Button>
    </CardActionArea>
    </Card>
    
</div>
  )
}

export default Acard