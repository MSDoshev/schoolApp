import { useState, useEffect} from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';


import {authServiceFactory} from './services/authService'
import { AuthContext } from "./contexts/AuthContext";


import { About } from './components/About/About';
import { Create } from './components/Create/Create';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { StudentDetails } from './components/StudentDetails/StudentDetails';
import { Students } from './components/Students/Students';
import { Logout } from "./components/Logout/Logout";
import { studentServiceFactory } from "./services/studentService";

function App() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken);
  const studentService = studentServiceFactory(auth.accessToken);

  useEffect(() => {
    studentServiceFactory(auth.accessToken).getAll()
      .then((result) => {
        console.log(result);
        setStudents(result);
      });
  }, [auth.accessToken]);

   const onCreateStudentSubmit = async (data) => {        
        const newStudent = await studentService.create(data);

        setStudents(state => [...state, newStudent]);
        navigate('/students');
    };
  
  const onLoginSubmit = async (data) =>{
    
    try {
        const result = await authService.login(data);
        console.log(result);
        setAuth(result);

        navigate('/')
    } catch (error) {
      console.log(error.message);  
    }

        
}

const onRegisterSubmit = async (values) => {
  const {confirmPassword, ...registerData} = values;
  if(confirmPassword !== registerData.password){
      return;
  }
  try {
      const result = await authService.register(registerData);

      setAuth(result);
      navigate('/')
  } catch (error) {
      console.log(error.message);  
  }
}

const onLogout = async () => {
  await authService.logout();
  
  setAuth({});

} 
const context = {
  onLoginSubmit,
  onRegisterSubmit,
  onLogout,
  userId: auth._id,
  token: auth.accessToken,
  userEmail: auth.email,
  userRole: auth.role,
  isAuthenticated:!!auth.accessToken
   
}

  return (
    <AuthContext.Provider value={context}>

    <div>
      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create onCreateStudentSubmit={onCreateStudentSubmit}/>}/>
        <Route path='/students' element={<Students students={students}/>}/>
        <Route path='/students/:studentId' element={<StudentDetails/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path ='/logout' element= {<Logout/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
      
      </Routes>
      </main>

      <Footer/>
    </div>

    </AuthContext.Provider>
  );
}

export default App;
