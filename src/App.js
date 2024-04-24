import './App.css';
import Header from './pages/Header';
import Header1 from './components/Header1';
import SinglePage from './pages/SinglePage';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Header></Header>}></Route>
       <Route path="/SinglePage/:id" element={<SinglePage></SinglePage>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
