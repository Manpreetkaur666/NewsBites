import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
    const pagesize = 8;
    // const apiKey = process.env.REACT_APP_API_KEY;
    const apiKey = "b72f28fcb3b14d319d71b258c0545178";
    
    const [progress, setProgress] = useState(0)
 

    return (
      <BrowserRouter>
          
              <div>
              <NavBar />
              <LoadingBar
                height={3}
                color='#f11946'
                progress={progress}
              />
              <Routes>
              <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize = {pagesize} category = "general"/>} />
                <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize = {pagesize} category = "entertainment"/>} />
                <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize = {pagesize} category = "sports"/>} />
                <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize = {pagesize} category = "health"/>} />
                <Route exact path="/science" element={<News setProgress = {setProgress} apiKey={apiKey} key="science" pageSize = {pagesize} category = "science"/>} />
                <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize = {pagesize} category = "technology"/>} />
              </Routes>
              </div>
          
      </BrowserRouter>
      
    )

}

export default App;

