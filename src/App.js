import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
