import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from "./components/NavbarComponent";
import CreateProfileForm from "./components/CreateProfileForm";
import {Container} from 'react-bootstrap';
import LoginSignup from './components/LoginSignup';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Container style={{ paddingTop: '20px' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/my-profile" element={<CreateProfileForm />} />
            <Route path="/" element={<LoginSignup />} />
          </Routes>
        </BrowserRouter>  
      </Container>
      
    </div>
    
  );
}

export default App;
