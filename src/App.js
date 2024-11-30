import './App.css';
import {BrowserRouter, Routes, Route,  useLocation} from 'react-router-dom';
import Home from './repractice/Home';
import About from './repractice/About';
import Navbar from './repractice/Navbar';
import Error from './repractice/Error';
import User from './repractice/User';
import Contact from './repractice/Contact';
import Company from './repractice/Company';
import Channel from './repractice/Channel';
import Login from './repractice/Login';
import Protected from './repractice/Protected';
import { useState } from 'react';

function App() {
    
  const[count, setCount] = useState(0);

  function update(){
    setCount(Math.floor(Math.random() * 10));
}
  return (
    <div className="App">
            <Home></Home>
      {/*<BrowserRouter>
   <Navbar/>
   <ConditionalRendering update={update}></ConditionalRendering>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/login'element={<Login/>}></Route>
    <Route path="/about" element= {<About count = {count} update = {update}/>}/>
    <Route path="/*" element={<Error/>}/>
    <Route path='/user/:name' element={<User/>}></Route>
    <Route path="/contact/" element={<Contact/>}>
    <Route path='company' element={<Company/>}/>
    <Route path='channel' element={<Channel/>}/>
    </Route>
   </Routes>
   </BrowserRouter> */}
    </div>
  );
}

function ConditionalRendering({update}){
      const location = useLocation();
      return (
        <>
        { location.pathname === '/about' && <button onClick={update}>click me</button>}
        </>
      )
}

export default App;
