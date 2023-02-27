
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Movies from './components/movies';
import Footer from './components/footer';
import Celebs from './components/celebs';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import PageNotFound from './components/404';
import AddFavourties from './components/addFavourties';



function App() {
  
  return (
    <div className="App">
      {/* <Navbar/>
      <Home/>
      <Movies/>
      <Celebs/>
      
      <Footer/>  */}
      
       <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/add-favourties'element={<AddFavourties/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter> 

    </div>
  );
}
export default App;
