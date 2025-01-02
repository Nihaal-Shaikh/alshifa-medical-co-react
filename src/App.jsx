import './App.css';
import Header from './components/Header.jsx';
import PauseOnHoveSlider from './components/PauseOnHoveSlider.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import Footer from './components/Footer.jsx';
import ProductList from './components/ProductList.jsx'; // Import your ShopPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import AdminSignIn from './components/Admin/AdminSignIn.jsx';
import AdminSignUp from './components/Admin/AdminSignUp.jsx';
import AdminForgotPassword from './components/Admin/AdminForgotPassword.jsx';

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
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/admin-sign-up" element={<AdminSignUp />} />
        <Route path="/admin-forgot-password" element={<AdminForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
