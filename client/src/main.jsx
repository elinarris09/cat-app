import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CatsContextProvider } from './components/CatsContext.jsx';
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
      <CatsContextProvider>
        <App />
      </CatsContextProvider>
      </Router>
  </React.StrictMode>
)