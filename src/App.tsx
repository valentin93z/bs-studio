import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Order from './components/order/Order';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Main /> */}
      <Order/>
      <Footer />
    </div>
  );
}

export default App;