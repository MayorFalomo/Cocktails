import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Home/Homepage';
import About from './Pages/About/About';
import Errorpage from './Pages/Errorpage';
import Drinkdetails from './Pages/Drinkdetails';
import { useEffect, useState } from 'react';
import Preload from './Components/Preload/Preload';
// import ReactLoading from "react-loading";

function App() {

  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {!completed ? (
        <div className="contain">
          {!loading ? (
            <div className="loader">
              <Preload/>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/drinks/:idDrink' element={<Drinkdetails />} />
            <Route path='*' element={<Errorpage />} />
          </Routes>
        </>
      )}
    </div>
  ); 
}

export default App;