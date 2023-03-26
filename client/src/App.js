import { Route, Routes } from 'react-router-dom';
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
function App() {
  return (
    <div>
      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/students/details' element={<StudentDetails/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
