import * as React from 'react';
import './style.css';
import { Fragment } from 'react';
import Shopcart from './component/Shopcart';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// component
import Navbar from './src/component/Navbar';

//pages
import Home from './src/pages/Home';
import Store from './src/pages/Store';
import About from './src/pages/About';

export default function App() {
  return (
    <Fragment>
      <Container className="mb-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/store" element={<Store />} />
          <Route  path="/about" element={<About />} />
        </Routes>
      </Container>
    </Fragment>
  );
}
