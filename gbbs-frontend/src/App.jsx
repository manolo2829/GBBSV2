import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Emails from './components/Emails';
import Footer from './components/Footer';
import Foros from './components/Foros';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import Messages from './components/Messages';
import ObjetoForo from './components/ObjetoForo';

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/foros' element={<Foros/>}></Route>
        <Route path='/mensajeria' element={<Messages/>}></Route>
        <Route path='/emails' element={<Emails/>}></Route>
        <Route path='/objetoforo' element={<ObjetoForo/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
