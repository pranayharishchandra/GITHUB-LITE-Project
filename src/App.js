import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router >
      <div className='container'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
