import Navbar from "../components/navbar/navbar";
import Hero from '../components/hero/hero'
import Menu from "../components/menu/menu";
import Pricing from "../components/pricing/pricing";
import Contact from "../components/contact/contact";
import Login from "../components/login/login";
import About from "../components/about/about"
import CallForAction from "../components/callForAction/callForAction";
// import Map from "../map/Map";

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CallForAction/>
      {/* <MapSection location={location} zoomLevel={17} /> */}
      <About/>
      <Menu/>
      <Pricing/>
      <Contact/>
    </>
  );
};

export default Home;
