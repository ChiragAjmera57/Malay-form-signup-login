import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import Protected from './component/Protected';

function App() {
  return (
   <Routes>
      <Route path='/' element={<Protected isSignedIn={false}><Dashboard /></Protected>} />
      <Route path='/login' Component={Login}/>
      <Route  path='/signup' Component={Signup}/>
   </Routes>
  );
}

export default App;
