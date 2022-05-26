import { Typography, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, Card, CardContent } from '@mui/material'
import { height } from '@mui/system'
import React, {useState} from 'react'
import axios from 'axios'

function QuestionPose() {
  const [formData, setFormData] = useState({
      title: '',
      body: '',
      tags: '',
      userId: ''
  })



  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("hello")
    console.log(formData)
    axios.post('/api/submitQ', formData)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    }) 
  }
  
    return (
      <Box component="form"  sx={{display: "flex", flexDirection: "column", gap: 2}}>
        <Card >
          <CardContent style={{backgroundColor: "#424242"}}>
    <Typography variant="h2" color="primary">Ask Your Question!</Typography>
        
        {/* <form onSubmit={handleSubmit}> */}
             
            <Typography variant="h5" color="primary">Brand Name and Model</Typography>
            <TextField sx={{width:"200px"}} placeholder='Brand and Model'variant="filled" id="" label="" onChange={(e)=> setFormData({...formData, title: e.target.value})} value={formData.title}/>
            
             <Typography variant="h5" color="primary">Question</Typography>
            <TextField sx={{width:"500px"}} placeholder='Type Question Here...'  id="" variant="filled"  label="" onChange={(e)=> setFormData({...formData, body: e.target.value})} value={formData.body}/>
            
            
            <Typography variant="h5" color="primary">Industry</Typography>
              <FormControl>
                <InputLabel id='tagLabel'>
                  Select Tag                
                </InputLabel>
                <Select sx={{width:"200px"}} onChange={(e)=> setFormData({...formData, tags: e.target.value})} value={formData.tags} placeholder="Tag..." labelId='tagLabel' id='status' variant='filled' >
                  <MenuItem value="Equipment">Equipment </MenuItem>
                  <MenuItem value="Conveyors">Conveyors </MenuItem>
                  <MenuItem value="PLC">PLC </MenuItem>
                  <MenuItem value="Welding">Welding </MenuItem>
                  <MenuItem value="Electrical">Electrical </MenuItem>
                  <MenuItem value="Gear/Ratios">Gear/Ratios </MenuItem>
                </Select>
              <Typography variant="h5" color="primary">User ID</Typography>
              <TextField sx={{width:"200px"}} placeholder='Id Number'  id="" variant="filled"  label="" onChange={(e)=> setFormData({...formData, userId: e.target.value})} value={formData.userId}/>
              <br></br><Button variant='contained' onClick={handleSubmit}>Submit</Button>
              </FormControl>
                <br />
                <br />
            {/* </form> */}
            </CardContent>
            </Card>
                 </Box>
    
  )
}

export default QuestionPose