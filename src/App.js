
import './App.css';
import Student from './Component/Student';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Error from './Component/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <div className='body'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home  className="body"/>} />
          <Route path='/Student' element={<Student  className="body"/>} />
          <Route path='/Contact' element={<Contact className="body" />}/>
          <Route path='/*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
  </div>
    

  );
}

export default App;
