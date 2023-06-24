import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {  Main, Code, Welcome, Profile, Username, Dashboard } from './components';



const App = () =>  (
    <BrowserRouter>
          <div>
            <Routes>
                <Route exact path="/" element={<Main/>} ></Route>
                <Route exact path="/code" element={<Code />} ></Route>
                <Route exact path="/welcome" element={<Welcome/>} ></Route>
                <Route exact path="/Welcome/profile" element={<Profile />} ></Route>
                <Route exact path="/Welcome/profile/username" element={<Username />} ></Route>
                <Route exact path="/Welcome/profile/username/dashboard" element={<Dashboard />} ></Route>
            </Routes>
          </div>
    </BrowserRouter>
  );


export default App