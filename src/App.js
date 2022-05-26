import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css';
import QuestionPose from './Components/QuestionPose';
import Navbar from 'react-bootstrap/Navbar'
import HomeScreen from "./Screens/HomeScreen"
import PosedQandAScreen from './Screens/PosedQandAScreen'
import Container from 'react-bootstrap/Container';
import  {LinkContainer}  from 'react-router-bootstrap';
import {ThemeProvider} from '@emotion/react'
import {  Typography, } from '@mui/material';
import TopMenu from './Components/TopMenu';
import DbPullQandA from './Components/DbPullQandA';



function App() {
  return (
    
   
    <div className="App">
       
      <TopMenu>
      
      </TopMenu>

        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/PosedQandAScreen" element={<PosedQandAScreen/>}/>
          <Route path="/Equipment" element={<DbPullQandA/>}/>
        </Routes>
        <footer>
          <Typography color="white" variant='h8'>All rights reserved</Typography>
        </footer>
       
    </div>
    
  );
}

export default App;
