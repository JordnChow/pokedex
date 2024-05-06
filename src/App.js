import './App.css';
import Home from './Home/home';
// import Blogs from './Blogs/blogs'; // Assuming you have these components
// import Contact from './Contact/contact';
// import NoPage from './NoPage/nopage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;