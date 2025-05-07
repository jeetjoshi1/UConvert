import { Home } from "./sections/Home"
import { useRef, useEffect, useState } from "react"


function App() {
  const [currencyChange, setCurrencyChange] = useState(false);
 
  return (
    <div className=" h-screen w-screen bg-background grid place-content-center font-instrument-sans">
      <div className="w-[40vw] h-[40vw] bg-[#FAF9F4] rounded-[60px] shadow-md hover:shadow-2xl transition duration-300 ">
        {currencyChange ? <Home setCurrencyChange={setCurrencyChange}/> : <Home setCurrencyChange={setCurrencyChange}/>}
      </div>
    </div>
  
  )
}

export default App
