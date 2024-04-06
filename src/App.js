import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import TutorSession from './components/Tutorsession';
import VideoCall from './components/Videocall';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
