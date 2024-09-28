import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import  SignUp from './pages/SignUp';
import { Verif } from './pages/VerifyAcc';
import { Dashboard } from './pages/Dashboard';
import { Verified } from './pages/Verified';
import MyProfile from './pages/MyProfile';
import { Bookmark } from './pages/Bookmark';
import { Progress } from './pages/Progress';
import { Classes } from './pages/Classes';
import { About } from './pages/Aboutus';
import { TesMinatPage } from './pages/Tesminat';
import { TesMinatQuestion } from './pages/TesMinatQuestion';
import { HasilTesMinat } from './pages/HasilTesMinat';
import { PeluangKarir } from './pages/PeluangKarir';
import { PelatihanSkillPage } from './pages/PelatihanSkill';
import PencariKerja from './pages/PencariKerja';
import EditProfile from './pages/EditProfile';

import './App.css'; 

function App() {
  return (

    <Router>
      <Routes>
  
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/VerifyAcc" element={<Verif />} />
        <Route path="/Verified" element={<Verified />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<MyProfile />} />        
        <Route path="/bookmark" element={<Bookmark />} />        
        <Route path="/progress" element={<Progress />} />        
        <Route path="/classes" element={<Classes />} />        
        <Route path="/about" element={<About />} />        
        <Route path="/tesminat" element={<TesMinatPage />} />        
        <Route path="/tesminatquestion" element={<TesMinatQuestion />} />        
        <Route path="/hasiltesminat" element={<HasilTesMinat />} />        
        <Route path="/peluangkarir" element={<PeluangKarir />} />        
        <Route path="/pelatihanskill" element={<PelatihanSkillPage />} />        
        <Route path="/pencarikerja" element={<PencariKerja />} />        
        <Route path="/editprofile" element={<EditProfile />} />        

      </Routes>
    </Router>

);
}

export default App;
