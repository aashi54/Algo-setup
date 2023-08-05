import { useState } from "react";
import "./Apps.css";
import Navigation from "./components/NavigationTemplate/Navigation";
import Main from './components/Main/Main'


function Apps()  {
      
    return(
        
         <div className="App">
         <Navigation/>
        <Main/>

         </div>
         
    )
}

export default Apps;