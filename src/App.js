
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Favourites from './Components/Favourites'
function App() {
  return (
    <BrowserRouter>

    <NavBar/>
    <Routes>
      <Route path="/" element={<>
      <Banner/>
        <Movies/>
        {/* <Pagination/> */}
      </>}/>

      <Route path='/favourites' element={<Favourites/>}/>
    </Routes>



    {/* <Banner/>
    <Movies/>
    <Pagination/> */}

    </BrowserRouter>
  );
}

export default App;
