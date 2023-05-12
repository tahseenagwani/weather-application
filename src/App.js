import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import SearchData from './component/SearchData';

function App() {
  return (
    <div >
    
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SearchData/>} ></Route>

        </Routes>
      
      </BrowserRouter>    
    </div>
  );
}

export default App;
