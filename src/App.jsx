import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router basename='/'>
            <Navbar />
            <div className="container pt-4">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/profile/:name' element={<Profile />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
