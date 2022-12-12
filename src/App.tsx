import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Order from './components/order/Order';

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