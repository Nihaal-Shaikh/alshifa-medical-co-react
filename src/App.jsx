import './App.css';
import Header from './components/Header.jsx';
import PauseOnHoveSlider from './components/PauseOnHoveSlider.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import Footer from './components/Footer.jsx';
import ProductList from './components/ProductList.jsx'; // Import your ShopPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Route for the Home Page */}
        <Route
          path="/"
          element={
            <>
              <PauseOnHoveSlider />
              <FeaturedProducts />
            </>
          }
        />
        {/* Route for the Shop Page */}
        <Route path="/shop" element={<ProductList />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
