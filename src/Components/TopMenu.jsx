import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function TopMenu() {
  return (
    <AppBar 
    position='static' 
    color='primary' 
    sx={{height:70}}>
        <Toolbar sx={{height:'100%', display:"flex"}}>
        <Typography variant="h4" >Mechanic Overflow</Typography>
        <Stack sx={{display:"flex", flexDirection:"row"}}>
          <Link to='/'>
          <Button color='inherit'>Home</Button>
          </Link>
          <Link to='/PosedQandAScreen'>
          <Button color='inherit'>Submit a Question</Button>
          </Link>
          <Link to='/Equipment'>
          <Button color='inherit'>Equipment</Button>
          </Link>
        </Stack>
        </Toolbar>
    </AppBar>
    



  )
}

export default TopMenu