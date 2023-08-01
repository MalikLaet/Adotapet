import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Cadastro' element={<Register/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

