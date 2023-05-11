import React from "react";
import Home from "./Website_Pages/Home";
import Blogs from "./Website_Pages/Blogs";
import Contactus from "./Website_Pages/Contact";
// import Layout from "./Website_Components/Layout";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return<>
  <BrowserRouter>
  <Routes>
    {/* <Route element={<Layout/>}> */}
    <Route index element={<Home/>}/> 
    <Route path="/Blogs" element={<Blogs/>}/>
    <Route path="/Contact_us" element={<Contactus/>}/>
    {/* </Route> */}
     </Routes>
  </BrowserRouter>
  
  

  
  </>
}

export default App;
