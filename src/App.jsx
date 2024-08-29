//import { useState } from 'react'

import './App.css'
import {Login} from "./components/Login.jsx";
import {Register} from "./components/Register.jsx";
import {Main} from "./components/Main.jsx";
import {NewProject} from "./components/NewProject.jsx";

function App() {
  //const [count, setCount] = useState(0)


  return (
    <>
      <div className="card">
          <NewProject newProject/>
          <Login login/>
          <Register register/>
          <Main main/>
      </div>
    </>
  )
}

export default App
