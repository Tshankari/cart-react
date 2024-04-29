import React from 'react';
//Routing
import { BrowserRouter,Route,Routes } from "react-router-dom";

//Component
import Header from './components/Header';
import Products from './components/Products';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Products/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
