import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import NaviBar from "./components/NaviBar";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Diary from "./pages/diary";
import Read from "./pages/read";

const App = () => {
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');

  const [date, setDate] = useState(new Date());

  return(
    <BrowserRouter>
      <Routes>
        <Route element={<NaviBar />}>
          <Route index element={<Welcome 
            owner={owner}
            setOwner={setOwner}
            name={name}
            setName={setName}
            age={age}
            setAge={setAge}
            gender={gender}
            setGender={setGender} />} />
          <Route path='home' element={<Home 
            date={date}
            setDate={setDate} />} />
          <Route path='profile' element={<Profile 
            name={name}
            age={age}
            gender={gender} />} />
          <Route path='diary' element={<Diary 
            date={date}
            owner={owner}
            age={age}
            gender={gender} />} />
          <Route path='read' element={<Read 
            date={date} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;