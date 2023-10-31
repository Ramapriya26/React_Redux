import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Productlist from './Components/ProductList';
import ProductComponent from './Components/ProductComponent';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element= { <Productlist /> } />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          {/* <Route>404 Not Found!</Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
