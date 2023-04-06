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
import { EditGame } from "./components/EditStudent/EditStudent";
import { AddPictures } from "./components/AddPictures/AddPictures";
import { galleryServiceFactory } from "./services/galleryService";

function App() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken);
  const studentService = studentServiceFactory(auth.accessToken);
  const pictureService = galleryServiceFactory(auth.accessToken);

  useEffect(() => {
    studentServiceFactory(auth.accessToken).getAll()
      .then((result) => {
        console.log(result);
        setStudents(result);
      });
  }, [auth.accessToken]);

  useEffect(() => {
    galleryServiceFactory().getAll()
      .then((result) => {
        console.log(result);
        setPictures(result);
      });
  }, [auth.accessToken]);

   const onCreateStudentSubmit = async (data) => {        
        const newStudent = await studentService.create(data);

        setStudents(state => [...state, newStudent]);
        navigate('/students');
    };
  
   const onCreatePictureSubmit = async (data) => {        
        const newPicture = await pictureService.create(data);

        setPictures(state => [...state, newPicture]);
        navigate('/gallery');
    };
  
    const onStudentEditSubmit = async (values) =>{

      const result = await studentService.edit(values._id, values);

      setStudents(state => state.map(x => x._id === values._id ? result : x))

      navigate(`/students/${values._id}`);

  }

  const deleteStudent = (studentId) => {
    setStudents(state=>state.filter(student => student._id !== studentId))
  }


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
        <Route path='/students/:studentId' element={<StudentDetails deleteStudent={deleteStudent}/>}/>
        <Route path='/students/:studentId/edit' element={<EditGame onStudentEditSubmit={onStudentEditSubmit}/>}/>
        <Route path='/gallery' element={<Gallery pictures={pictures}/>}/>
        <Route path='/gallery/create' element={<AddPictures onCreatePictureSubmit={onCreatePictureSubmit}/>}/>
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
