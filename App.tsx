import * as React from 'react';
import './style.css';
import Shopcart from './component/Shopcart';
import {Routes,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';



export default function App() {
  return (
    <div>
      <Container>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </Container>
    </div>
  );
}
