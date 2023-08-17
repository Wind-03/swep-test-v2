/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Signin from './login-pages/SignIn.jsx'
import './index.css'
import LandingPage from './LandingPage/LandingPage.jsx'
import Signup from './login-pages/SignUp.jsx'
import Security from './chat-pages/Security.jsx'
import Info from './login-pages/Info.jsx'
import Contact from './login-pages/Contact.jsx'
import Aichat from './chat-pages/AiChat.jsx'
import Community from "./chat-pages/Community.jsx"
import "./login-styles/App.css"
import Settings from "./chat-pages/Settings.jsx"
import Exercises from "./SidePanel/Exercises.jsx"
import Help from "./SidePanel/help.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json"
    }
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "Signin",
    element: <Signin/>,
  },
  {
    path: "Signup",
    element: <Signup/>,
  },
  {
    path: "Info",
    element: <Info/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Aichat",
    element: <Aichat />,
  },
  {
    path: "Community",
    element: <Community />,
  },
  {
    path: "Settings",
    element: <Settings />,
  },
  {
    path: "Security",
    element: <Security />,
  },
  {
    path: "Exercises",
    element: <Exercises />,
  },
  {
    path: "Help",
    element: <Help />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
