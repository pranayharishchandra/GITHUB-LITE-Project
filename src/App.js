import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Pagenotfound from './components/pages/Pagenotfound';
import { GithubProvider } from './components/context/github/GithubContext';
import { AlertProvider } from './components/context/alert/AlertContext';
// import Alert from './components/pages/Alert';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='container'>
            <Navbar />
            <div>
              {/* <Alert /> */}
              <Routes>
                <Route path='/home'         element={<Home />} />
                <Route path='/'             element={<Home />} />
                <Route path='/about'        element={<About />} />
                <Route path='/pagenotfound' element={<Pagenotfound />} />
                <Route path='/*'            element={<Pagenotfound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
