import { Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { Create } from './components/Create/Create';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
function App() {
  return (
    <div>
      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
