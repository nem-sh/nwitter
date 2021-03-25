import React, { useEffect, useState } from "react"
import AppRouter from "components/Router";
import {authService} from "firebaseSetting"
function App() {
  console.log(authService.currentUser)
  const [authInit,setAuthInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() =>{
    
  })
  return (
  <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
