import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {  Main, Code, Welcome, Profile, Username, Dashboard } from './components';



const App = () =>  (
    <BrowserRouter>
          <div>
            <Routes>
                <Route exact path="/" element={<Main/>} ></Route>
                <Route exact path="/Code" element={<Code />} ></Route>
                <Route exact path="/Welcome" element={<Welcome/>} ></Route>
                <Route exact path="/Profile" element={<Profile />} ></Route>
                <Route exact path="/Username" element={<Username />} ></Route>
                <Route exact path="/Dashboard" element={<Dashboard />} ></Route>
            </Routes>
          </div>
    </BrowserRouter>
  );


export default App