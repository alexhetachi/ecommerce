import './App.css'
import TopNavbar from "./components/dashboard/TopNavbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import Slider from './components/dashboard/Slider';
import Cards from './components/dashboard/Cards';
import Footer from './components/dashboard/Footer';

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <Slider/>
      <p className="headingprod">Products</p>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
