import './App.css';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import ResumePage from './Pages/ResumePage';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/resume' element={<ResumePage />} />

    </Routes>
      
    </div>
  );
}
export default App
