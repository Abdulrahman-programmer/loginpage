import Login from './Components/Login';
import SignUp from './Components/SingUp';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
function App() {


  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
