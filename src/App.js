import Navbar from './Assets/Components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Assets/Pages/Home';
import Footer from './Assets/Components/footer';
import Additem from './Assets/Pages/Additem'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/addblog' element={<Additem />}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
