import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import {Suits,SuitsC,Narcos,NarcosC,Thebl,TheblC} from "./movielist";
import "./App.css";

 function App() {
 const Home = ()=>{
    return(
      <>
      <div>
        <h2 style={{textAlign:"center"}}>Home of movies</h2>
      </div>
      <div className="mvlist">
        <div className="suits">
        <Suits/>
        </div>
   <div className="narcos">
   <Narcos/>
   </div>
<div className="theb">
<Thebl/>
</div>

      </div>
     
      </>
    )
  }
return(
  <>
  <div>
  </div>
  <div>
  <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route index path='/suitsc' element={<SuitsC />}></Route>
       <Route index path='/narcosc' element={<NarcosC />}></Route>
       <Route index path='/theblacklistc' element={<TheblC />}></Route>
     </Routes>
  </div>
  </>
)
}



export default App