import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import  SignUp from './pages/Signup/SignUp';
import { Verif } from './pages/VerifyAcc/VerifyAcc';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Verified } from './pages/VerifyAcc/Verified';
import MyProfile from './pages/MyProfile/MyProfile';
import { Bookmark } from './pages/Bookmark/Bookmark';
import { Progress } from './pages/Progress/Progress';
import { Classes } from './pages/Clasess/Classes';
import { About } from './pages/AboutUs/Aboutus';
import { TesMinatPage } from './pages/TesMinat/Tesminat';
import { TesMinatQuestion } from './pages/TesMinatQuest/TesMinatQuestion';
import { HasilTesMinat } from './pages/HasilTesMinat/HasilTesMinat';
import { PeluangKarir } from './pages/PeluangKarir/PeluangKarir';
import PelatihanSkillPage from './pages/PelatihanSkill/PelatihanSkill';
import PencariKerja from './pages/PencariKerja/PencariKerja';
import EditProfile from './pages/EditProfile/EditProfile';

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
