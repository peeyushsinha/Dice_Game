import { useState } from "react"
import GamePlay from "./components/GamePlay"
import StartGame from "./components/StartGame"
import "./index.css"


function App() {
  
  const [isGameStarted , setisGameStarted] = useState(false);

  const toggleGamePlay=()=>{
    setisGameStarted((obj)=>!obj);
  };

 
  return (
 <>
 {isGameStarted ? <GamePlay/>:<StartGame toggle={toggleGamePlay}/> }</>
    
  )
}

export default App
