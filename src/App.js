import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css';
import QuestionPose from './Components/QuestionPose';
import Navbar from 'react-bootstrap/Navbar'
import HomeScreen from "./Screens/HomeScreen"
import PosedQandAScreen from './Screens/PosedQandAScreen'
import Container from 'react-bootstrap/Container';
import  {LinkContainer}  from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'>
      <Navbar.Brand>Mechanic Overflow</Navbar.Brand>
      </LinkContainer>
      <LinkContainer to='/PosedQandAScreen'>
      <Navbar.Brand> QandA </Navbar.Brand>
      </LinkContainer>
      </Container>
      </Navbar>
    </header>
      
      <main>
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/PosedQandAScreen" element={<PosedQandAScreen/>}/>
            
          
        </Routes>
      </Container>
        
      
        </main>
        <footer>
          <div>All Rights Reserved</div>
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
