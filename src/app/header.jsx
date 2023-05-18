import React from 'react'
import Artists from "./navbar/artists";
import Gallery from "./navbar/gallery";
import History from "./navbar/history";
import Stories from "./navbar/stories";
import Themes from "./navbar/themes";
import Menue from "./navbar/menue";
import "./App.css"


import { Route,Routes } from 'react-router-dom';

function header() {
  return (
    <div>

<div class="container">
  <div class="div1"> <h1>Post Cards From siege</h1> </div>
  <div class="div2">
    
  
    
    <Menue></Menue>
   
    
    </div>
   
     

</div>

<Routes>
<Route path='/artists' element={<Artists/>}/>
<Route path='/gallery' element={<Gallery/>}/>
<Route path='/history' element={<History/>}/>
<Route path='/stories' element={<Stories/>}/>
<Route path='/themes' element={<Themes/>}/>

</Routes>

      

    </div>
  )
}

export default header
