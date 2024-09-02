import './App.css'
import {Login} from "./components/Login.jsx";
import {Register} from "./components/Register.jsx";
import {Main} from "./components/Main.jsx";
import {NewProject} from "./components/NewProject.jsx";
import {Project} from "./components/Project.jsx";
import {Task} from "./components/Task.jsx";
import {TasksDetails} from "./components/TasksDetails.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NewTask} from "./components/NewTask.jsx";
import {Report} from "./components/Report.jsx";
import {Tasks} from "./components/Tasks.jsx";

function App() {

  return (
    <>
      <div className="card">
          <BrowserRouter>
              <div>
                  <Routes>
                      <Route path="/" element={<Login/>} />
                      <Route path="/login" element={<Login/>} />
                      <Route path="/register" element={<Register/>} />
                      <Route path="/reception" element={<Main/>} />

                      <Route path="/project/:id" element={<Project/>} />
                      <Route path="/report/:idProject" element={<Report/>} />
                      <Route path="/project/new" element={<NewProject/>} />

                      <Route path="/tasks/:idProject" element={<NewTask/>} />
                      <Route path="/tasks/details/:idUser/:idProject" element={<TasksDetails/>} />
                      <Route path="/tasks/all/:idUser" element={<Tasks/>} />
                      <Route path="/task/:id" element={<Task/>} />
                  </Routes>
              </div>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
