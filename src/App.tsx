import Collection from "./Components/Collection/Collection";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Product/Product";
import Product from './Components/SingleProduct/SingleProduct';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Collection />
                <Products />
              </>
            }
          />
          <Route path="/product/:id" element={<Product  />} />

          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
