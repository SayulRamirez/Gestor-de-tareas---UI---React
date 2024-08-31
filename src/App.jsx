//import { useState } from 'react'

import './App.css'
import {Login} from "./components/Login.jsx";
import {Register} from "./components/Register.jsx";
import {Main} from "./components/Main.jsx";
import {NewProject} from "./components/NewProject.jsx";
import {Project} from "./components/Project.jsx";
import {Task} from "./components/Task.jsx";
import {TasksDetails} from "./components/TasksDetails.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <div className="card">
          <BrowserRouter>
              header
              <div>
                  <Routes>
                      <Route path="/" element={<Login/>} />
                      <Route path="/login" element={<Login/>} />
                      <Route path="/register" element={<Register/>} />
                      <Route path="/reception" element={<Main/>} />
                  </Routes>
              </div>
              <NewProject newProject/>
              <Project project/>
              <Task task/>
              <TasksDetails taskDetails/>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
