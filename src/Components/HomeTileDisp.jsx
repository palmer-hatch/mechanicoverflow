import React from 'react'
import HomeCard from './HomeCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import homeData from '../homeData'
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Paper, Container } from '@mui/material'
import {useNavigate} from "react-router-dom"
function HomeTileDisp() {
  
const navigate = useNavigate()

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/')
        .then((res)=> {
            console.log(res.data)
          setData(res.data)
        })
    }, [data])
  
  
    return (
        <Container  maxWidth="lg">
            
                
        <Typography variant='h4' color="primary"
        >Select Trade</Typography>
        < Grid container sx={{display:"flex", flexWrap:'wrap', gap:2}} justifyContent="center" >
       {homeData.topics.map(t => (<div>
           
               <Grid  sm={6} item key={t.name} >
               
        <Card onClick={()=>{
          navigate(`/${t.name}`)
        }} sx={{width:'200px'}} >
      <CardActionArea style={{backgroundColor: "#424242"}}>
        <CardMedia
          component="img"
          height="200" 
          image={t.imgUrl}
          alt={t.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" color="primary"component="div">
          {t.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 
    </Grid>
    
            
           
            </div> ))
       }
            
            </Grid>
       
        



        
    </Container>
    )
}

export default HomeTileDisp