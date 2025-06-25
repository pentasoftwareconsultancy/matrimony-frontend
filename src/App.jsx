import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Homepages from "./page/home/Homepages";
import Aboutpages from "./page/aboutpages/Aboutpages";
import Groompages from "./page/groompages/Groompages";
import ProfileComponent from "./components/bride/profilecomponent/Profilecomponent";
import Contactpages from "./page/contactpages/Contactpages";
import Footer from "./components/footers/footer/Footer";
import Login from "./components/logins/login/Login";
import Blogpages from "./page/blogpages/Blogpages";
import Blogmaincard from "./components/blog/blogmaincards/Blogmaincard";
import Step from "./components/logins/register/step/Step";
import Navbar from "./components/navbar/Navbar";
import Eventspages from "./page/eventspage/Eventspages";
import EventCard from "./components/events/eventCard/EventCard"; // Not used in Routes, consider removing
import Eventdetail from "./components/events/eventsdetail/Eventsdetail";
import Vendorpages from "./page/vendorpages/Vendorpages";
import VendorDetail from "./components/venders/Vendordetail/Vendordetail";
import MemberPage from "./page/memberpages/Memberpages";
import MemberDetail from "./components/member/memberdetails/Memberdetail"; // Ensure this path is correct
import Bridepages from "./page/bridepages/Bridepages";
import Groommain from "./components/groom/groommains/Groommain";
import Logout from "./components/logins/logouts/Logout";
import PricingPlans from "./components/pricings/pricingmain/Pricingmain";
import PaymentMethods from "./components/pricings/paymentmethods/Paymentmethod";
import Scrolltotop from "./components/scrolltotops/Scrolltotop";
import Photographypages from "./page/photographypages/Photographypages";
import PhotographyDetail from "./components/photography/photographydetail/Photographydetail";
import Decorationpages from "./page/decorationpages/Decorationpages";
import DecorationDetail from "./components/decoration/decorationdetail/DecorationDetail";       
import DjMusicPages from "./page/djmusicpages/DjMusicPages";
import DjMusicDetail from "./components/djmusic/djmusicdetail/DjMusicDetail";
import VendorJewelryPages from "./page/vendorjewelrypages/VendorJewelryPage";
// import VendorJewelryPages from "./page/vendorjewelrypages/VendorJewelryPages";
import VendorJewelryDetail from "./components/vendorjewelry/vendorjewelrydetail/VendorJewelryDetail";
import VendorLightingAndSoundPages from "./page/vendorlightingandsoundpage/VendorLightingAndSoundPages";
import VendorLightingAndSoundDetail from "./components/vendorlightingandsound/vendorlightingandounddetail/VendorLightingAndSoundDetail";
import VendorMakeupAndHairPages from "./page/makeuphairpages/MakeupHairPages";
import VendorMakeupAndHairDetail from "./components/makeuphair/makeuphairdetail/MakeupHairDetail";
import GroomwearPages from "./page/groomwearpages/GroomwearPage";
import GroomwearDetail from "./components/groomwear/groomweardetail/GroomwearDetail";
import BridalwearPages from "./page/bridalwearpages/BridalwearPages";
import BridalwearDetail from "./components/bridalwear/bridalweardetail/BridalwearDetail";
import MakeupArtistPages from "./page/makeupartistpages/MakeupArtistPages";
import MakeupArtistDetail from "./components/makeupartist/makeupartistdetail/MakeupArtistDetail";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";     


function AppContent() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const isProfilePage = location.pathname.startsWith("/profile");

  return (
    <>
      <Navbar isHomePage={isHomePage} />
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<Aboutpages />} />
        <Route path="/bride" element={<Bridepages />} />
        <Route path="/groom" element={<Groompages />} />
        <Route path="/profile/:id" element={<ProfileComponent />} />
        <Route path="/contact" element={<Contactpages />} />
        <Route path="/groommain" element={<Groommain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blogpages />} />
        <Route path="/blog/:id" element={<Blogmaincard />} />
        <Route path="/register" element={<Step />} />
        <Route path="/events" element={<Eventspages />} />
        <Route path="/events/:id" element={<Eventdetail />} />
        <Route path="/vendors" element={<Vendorpages />} />
        <Route path="/vendordetail/:id" element={<VendorDetail />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/members/:id" element={<MemberDetail />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/paymentmethod/:id" element={<PaymentMethods />} />
        <Route path="/photpgrapy" element={<Photographypages/>}/>
        <Route path="/vendor/:id" element={<PhotographyDetail/>} />
        <Route path="/decoration" element={<Decorationpages/>}/>
        <Route path="/decorations/:id" element={<DecorationDetail/>}/>
        <Route path="/djmusic" element={<DjMusicPages/>}/>
        <Route path="/djmusic/:id" element={<DjMusicDetail/>}/>
        <Route path="/jewelry" element={<VendorJewelryPages/>} />
        <Route path="/jewelry/:id" element={<VendorJewelryDetail />} />
        <Route path="/lightingsound" element={<VendorLightingAndSoundPages/>} />
        <Route path="/lightingsound/:id" element={<VendorLightingAndSoundDetail/>} />
        <Route path="/makeuphair" element={<VendorMakeupAndHairPages />} />
        <Route path="/makeuphair/:id" element={<VendorMakeupAndHairDetail />} />
        <Route path="/groomwear" element={<GroomwearPages />} />
        <Route path="/groomwear/:id" element={<GroomwearDetail />} />
        <Route path="/bridalwear" element={<BridalwearPages />} />
        <Route path="/bridalwear/:id" element={<BridalwearDetail />} />
        <Route path="/makeupartist" element={<MakeupArtistPages />} />
        <Route path="/makeupartist/:id" element={<MakeupArtistDetail />} />
        

      </Routes>
      {!isLoginPage && !isRegisterPage && !isProfilePage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;