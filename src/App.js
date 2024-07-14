import './App.css'
import './index.css'
import Home from './Components/Home';
import Content from './Content';
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Watch from './Components/Watch';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/watch/:videoId' element={<Watch/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
