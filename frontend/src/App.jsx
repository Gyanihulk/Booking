import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TermsAndConditions from './Pages/TermsCondition';
import RefundPolicy from './Pages/Refund';
import PrivacyPolicy from './Pages/Privacy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Checkout';
import { Toaster } from 'react-hot-toast';
import PhonePayCheckoutPage from './Pages/PhonePayCheckoutPage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Toaster />
    <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/hotel/:hotelId/checkout/" element={<Checkout/>} />
          <Route path="/phonepaycheckoutPage" element={<PhonePayCheckoutPage/>} />
        </Routes>
      </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
