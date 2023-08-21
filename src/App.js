
import './App.css';
import dog from './Group 2.png'
import catdog from './Cat-N-Dog-Logo copy.png'
import i1 from './AppStoreBadge.png'
import i2 from './google-play-badge.png'
import { useEffect,useState } from 'react';
import { BrowserRouter as  
  Routes,Route} from "react-router-dom";
  import contact from './contact';
  import { NavLink } from 'react-router-dom';
 

  


function App() {

  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8080")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (


    <div className='mainpage'>

      {/* <Router>
        <switch>
        <Route path="/contact" component={contact} />
        </switch>
      </Router> */}


     
     
      

      <div>
        <nav classname="navbar navbar-expand-lg navbar-light bg-light">
  <div classname="container-fluid">
   
    <div classname="collapse navbar-collapse" id="navbarNav">
      <ul classname="navbar-nav">
        <li classname="nav-item">
        <NavLink to="/contact">about</NavLink>
        </li>
        <li classname="nav-item">
        <NavLink to="/contact">blog</NavLink>
        </li>
        <li classname="nav-item">
        <NavLink to="/contact">career</NavLink>
        </li>

        <li classname="nav-item">
          
          <NavLink to="/contact">contact</NavLink>
         
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>

    <div className='catdog'>
      <img src={catdog} alt="Dog" />
    </div>
       
   
      <div className='second-div'>

        <div className='parah4'>
        <h1 >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        </div>

        <div className='parap'>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className='i'>

      
        <div className='i1'>
        <img   src={i1} alt="Dog" />
        </div>
        
       

        
        <div className='i2'>
        <img   src={i2} alt="Dog" />
        </div>
      
     
      
      </div>
      
    

      <div className='myimg'>
        <div>
          
        <img   src={dog} alt="Dog" />
       

        <div className='myimg-p'>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
     </div>
        </div>
     

     


       
      </div>
     
      
       



    </div>
    

    {/* <Routes>
   
        <Route path="/contact" element={<contact/>} />
      
      </Routes> */}
    </div>
    
  );
}

export default App;
