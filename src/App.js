import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Signup from './components/Signup'
import Signin from './components/Signin'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Booking_a_consultation from './components/Booking_a_consultation';
import Homepage from './components/Homepage';
import Makepayment from './components/Makepayment';
import Footer from './components/footer';
import Getservices from './components/Getservices';
import Aboutus from './components/Aboutus';
import Uploadservice from './components/Uploadservice';
import Navbar from './components/Navbar';
import LawChatbot from './components/LawChatbot';
import WhatsAppQR from './components/WhatsappQR';
import MapView from './components/MapView';

<Route path="/map" element={<MapView />} />


function App() {
  return (
      <Router>
        <div className='App container-fluid'>
          {/* navbar is at the top */}
            <Navbar/> 
            
            {/* Head section */}
          <header className='App-header'>
            <p> 
              <span className='imgspan'><img src="assets/images/firm.png" alt="headerimg" className='headerimg'/></span>VIVID_VIGNETTE FIRM 🕴</p>
          </header>


          <Routes>
            <Route path = '/signup' Component = {Signup}/>
            <Route path="/map" element={<MapView />} />
            < Route path = '/signin' Component = {Signin}/>
            <Route path = '/consultation' Component={Booking_a_consultation}/>
            <Route path = '/' Component={Homepage}/>
            <Route path='/aboutus'element={<Aboutus/>}/>
            <Route path='/Makepayment' Component={Makepayment}/>
            <Route path='/Getservices' Component={Getservices}/>
            <Route path = '/Uploadservice' Component={Uploadservice}/>        
            </Routes>
            <LawChatbot/> 
            <WhatsAppQR/>
           <Footer/>
        </div>
      </Router>
  );
}

export default App;
