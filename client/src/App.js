import { useState, useEffect} from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';


import {authServiceFactory} from './services/authService'
import { chatServiceFactory } from "./services/chatService";
import { userServiceFactory } from "./services/userService";
import { galleryServiceFactory } from "./services/galleryService";
import { studentServiceFactory } from "./services/studentService";

import { RouteGuard } from "./components/common/RouteGuard";

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
import { EditStudent } from "./components/EditStudent/EditStudent";
import { AddPictures } from "./components/AddPictures/AddPictures";
import { Profile } from "./components/Profile/Profile";
import { EditUser } from "./components/EditUser/EditUser";
import { Chat } from "./components/Chat/Chat";



function App() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [messages, setMessages] = useState([]);
  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken);
  const studentService = studentServiceFactory(auth.accessToken);
  const pictureService = galleryServiceFactory(auth.accessToken);
  const userService = userServiceFactory(auth.accessToken);
  const chatService = chatServiceFactory(auth.accessToken);

  useEffect(() => {
    studentServiceFactory(auth.accessToken).getAll()
      .then((result) => {
        setStudents(result);
      });
  }, [auth.accessToken]);

  useEffect(() => {
    galleryServiceFactory().getAll()
      .then((result) => {
        setPictures(result);
      });
  }, [auth.accessToken]);
  
  useEffect(() => {
    chatServiceFactory().getAll()
      .then((result) => {
        setMessages(result);
      });
  }, [auth.accessToken]);

   const onCreateStudentSubmit = async (data) => {        
        const newStudent = await studentService.create(data);

        setStudents(state => [...state, newStudent]);
        navigate('/students');
    };

   const onCreateMessageSubmit = async (data) => {        
        const newMessage = await chatService.create(data);
        setMessages(state => [...state, newMessage]);
       
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

  const onUserEditSubmit = async (values) => {
    console.log(values);
    const result = await userService.edit(values._id, values);
    console.log(`This is the result ${result}`);
    setAuth(result);
    navigate(`/profile/${auth._id}`);
  }


  const onLoginSubmit = async (data) =>{
    
    try {
        const result = await authService.login(data);
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
  fullName:auth.fullName,
  imageUrl:auth.imageUrl,
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
        <Route path='/gallery' element={<Gallery pictures={pictures}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path ='/logout' element= {<Logout/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>

        <Route element={<RouteGuard />}>
          <Route path='/profile/:userId' element={<Profile/>}/>
          <Route path='/profile/:userId/edit' element={<EditUser onUserEditSubmit={onUserEditSubmit}/>}/>
          <Route path='/chat' element={<Chat messages={messages} onCreateMessageSubmit={onCreateMessageSubmit}/>}/>
          <Route path='/gallery/create' element={<AddPictures onCreatePictureSubmit={onCreatePictureSubmit}/>}/>
          <Route path='/create' element={<Create onCreateStudentSubmit={onCreateStudentSubmit}/>}/>
          <Route path='/students' element={<Students students={students}/>}/>
          <Route path='/students/:studentId' element={<StudentDetails deleteStudent={deleteStudent}/>}/>
          <Route path='/students/:studentId/edit' element={<EditStudent onStudentEditSubmit={onStudentEditSubmit}/>}/>
        </Route>



      
      </Routes>
      </main>

      <Footer/>
    </div>

    </AuthContext.Provider>
  );
}

export default App;
