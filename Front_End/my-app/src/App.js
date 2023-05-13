import React from "react";
import Home from "./Website_Pages/Home";
import Blogs from "./Website_Pages/Blogs";
import Contactus from "./Website_Pages/Contact";
import PostDetail from "./Website_Components/PostDetail";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from "react";


function App() {
  const [single_post_info,updateinfo]=useState([])
  return<>
  <BrowserRouter>
  <Routes>
    {/* <Route element={<Layout/>}> */}
    <Route index element={<Home/>}/> 
    <Route path="/Blogs" element={<Blogs single_post={updateinfo}/>}/>
    <Route path="/Contact_us" element={<Contactus/>}/>
    <Route path="/Post_Detail" element={<PostDetail single_post_info={single_post_info}/>}/>
    {/* </Route> */}
     </Routes>
  </BrowserRouter>
  
  

  
  </>
}

export default App;
