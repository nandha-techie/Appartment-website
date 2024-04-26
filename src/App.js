import Header from './component/Header';
import Carousel from './component/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import './custom.css';
import FloorPlan from './component/FloorPlan';
import Location from './component/Location';
import Amenities from './component/Amenities';
import Features from './component/Features';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <FloorPlan />
      <Location />
      <Amenities />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
