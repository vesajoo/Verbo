import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./index.css"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CreateSub from "./pages/CreateSub"
import SubVerbo from "./pages/SubVerbo"
import ProtectedRoute from "./components/ProtectedRoute"
import Submit from "./pages/Submit"
import Layout from "./components/Layout"
import Comments from "./pages/Comments"
import Profile from "./pages/Profile"

function Logout() {
  localStorage.clear()
  return <Navigate to="/home" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Layout/>
      <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/register" element={<RegisterAndLogout />}/>
          <Route 
            path="/create_sub" 
            element={
              <ProtectedRoute>
                <CreateSub />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/submit/" 
            element={
              <ProtectedRoute>
                <Submit />
              </ProtectedRoute>
            }
          />
          <Route path="/:selectedStory" element={<Comments/>}/>
          <Route path="/v/:sub" element={<SubVerbo />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/u/:user" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
