import { useEffect, useState } from "react";
import "./Apps.css";
import Navigation from "./components/NavigationTemplate/Navigation";
import Main from './components/Main/Main'
import Login from "./Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { FaLess } from "react-icons/fa";



function Apps()  {
    
    const [LoggedIn, setLoggedIn] = useState(false);


    useEffect(()=>{
     onAuthStateChanged(auth, (user)=>{
        if(user){
            setLoggedIn(true)
        } else{
            setLoggedIn(false);
        }
     })
    },[])
      
    return(
        
         <div className="App">
            {LoggedIn ? <>
                <Navigation/>
                <Main/>
            </> : (
                <Login/>
            )
            
        }
         
       
       

         </div>
         
    )
}

export default Apps;