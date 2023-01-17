import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
import Order from './pages/order/Order';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/bs-studio' element={<Main />} />
        <Route path='/bs-studio/order' element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;