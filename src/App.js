import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import TutorSession from './components/Tutorsession';
import VideoCall from './components/Videocall';
import TutorDashboard from './components/TutorDashboard';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/tutorsession' element={<TutorSession />} />
          <Route path='/videocall' element={<VideoCall />} />
          <Route path='/TutorDashboard' element={<TutorDashboard />} />
          <Route path='/StudentDashboard' element={<StudentDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
