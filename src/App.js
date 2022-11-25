import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
        <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
    </div>
  );
}

export default App;
