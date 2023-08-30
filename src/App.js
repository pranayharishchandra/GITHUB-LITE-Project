import './App.css';
import Navbar       from      './components/layout/Navbar';
import Footer       from     './components/layout/Footer';
import About        from    './components/pages/About';
import User         from   './components/pages/User';
import Home         from  './components/pages/Home';
import Pagenotfound from './components/pages/Pagenotfound';

import { GithubProvider } from './components/context/github/GithubContext';
import { AlertProvider } from './components/context/alert/AlertContext';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='container'>
            <Navbar />
            <div>
              <Routes>
                <Route path='/home'         element={<Home />} />
                <Route path='/'             element={<Home />} />
                <Route path='/about'        element={<About />} />
                {/* <Route path='/user/'        element={<User />} /> */}
                <Route path='/user/:login'  element={<User />} />
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
