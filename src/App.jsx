import { useState } from 'react'
import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, Projects, ProjectDetails, People, PeopleA, PeopleB, Users } from './Home'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/projects"}>
          <button>Projects</button>
        </Link>
        <Link to={"/people"}>
          <button>People</button>
        </Link>
        <Link to={"/users"}>
          <button>Users</button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}>
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Route>
        <Route path="/people" element={<People />}>
          <Route path="/people/a" element={<PeopleA />} />
          <Route path="/people/b" element={<PeopleB />} />
        </Route>
        <Route path="/users/*" element={<Users />} />
        <Route path="/*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
