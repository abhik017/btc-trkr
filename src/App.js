import './App.css';
import React, {useState} from 'react';
import Sidebar from './components/sidebar/sidebar';
import Graph from './components/graphs/graph';
import acadza_logo_png from './acadza_logo_png.png';
import Navbar from './components/navbar/navbar';
const io = require('socket.io-client');
const socket = io('https://btc-trkr-service.herokuapp.com/');
let p = 0;
socket.on('connection');

socket.on('refresh', (data) => {
  p = data;
});

function App() {
  const [price, setPrice] = useState(0);  
  setInterval( () => {
    setPrice(p);
  }, 500);
  return (
    <div className="App">
        <Navbar/>
        <div className="brand-logo">
          <img
            src={acadza_logo_png}
            height="45px"
            width="50px"
            alt="acadza"
          />
          {/* <p>ACADZA</p> */}
        </div>
        <div className='content'>
          <Graph
          price={price}
          />
          <Sidebar/>
        </div>
    </div>
    
  );
}

export default App;
