import Navbar from "../components/navbar/navbar";
import Hero from '../components/hero/hero'
import Menu from "../components/menu/menu";
import Pricing from "../components/pricing/pricing";
import Contact from "../components/contact/contact";
import About from "../components/about/about"
import CallForAction from "../components/callForAction/callForAction";
// import Map from "../map/Map";
import './home.css'

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
      <h1 className='Head' >Our Story</h1>
      <div className="missionContainer">
        <div className="Storyimg">
        </div>
        <div className="missionCnt">
          <p style={{fontFamily: "Roboto Slab, serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ultricies nisl. Nam est ex, fermentum nec purus vel, auctor volutpat elit. Fusce tincidunt scelerisque volutpat. Fusce accumsan lorem sed massa auctor egestas. In feugiat, nibh quis convallis volutpat, risus arcu iaculis risus, vel ultricies augue ex luctus nunc. Pellentesque lacus nisi, ultrices ut urna non, suscipit lacinia libero. Nunc sit amet vehicula nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sit amet pulvinar quam. Mauris venenatis non diam at rutrum. Etiam ut aliquet lorem. Fusce consequat sagittis felis vitae commodo.
            <br/>Cras dolor libero, condimentum et egestas in, laoreet ut justo. Suspendisse lacinia dignissim nunc egestas rutrum. Etiam quis dapibus felis, in ultrices velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sit amet purus vitae ex tempus bibendum in ac lectus. Integer egestas laoreet nisl at lacinia. Nam pulvinar mi a metus vulputate, interdum condimentum tellus euismod. Suspendisse placerat consectetur nunc, a porttitor felis. Aliquam molestie augue id dolor pretium, vel aliquet dolor commodo. Nunc nunc metus, lobortis nec volutpat quis, consectetur vel augue. Donec placerat quam vel nisl malesuada eleifend. Nam odio urna, faucibus id mattis vel, feugiat in leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc et sodales sapien.
          </p>
        </div>
      </div>
      <About/>
      <Menu/>
      <h1 className='Head' >Our Mission</h1>
      <div className="missionContainer">
        <div className="missionCnt">
          <p style={{fontFamily: "Roboto Slab, serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ultricies nisl. Nam est ex, fermentum nec purus vel, auctor volutpat elit. Fusce tincidunt scelerisque volutpat. Fusce accumsan lorem sed massa auctor egestas. In feugiat, nibh quis convallis volutpat, risus arcu iaculis risus, vel ultricies augue ex luctus nunc. Pellentesque lacus nisi, ultrices ut urna non, suscipit lacinia libero. Nunc sit amet vehicula nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sit amet pulvinar quam. Mauris venenatis non diam at rutrum. Etiam ut aliquet lorem. Fusce consequat sagittis felis vitae commodo.
            <br/>Cras dolor libero, condimentum et egestas in, laoreet ut justo. Suspendisse lacinia dignissim nunc egestas rutrum. Etiam quis dapibus felis, in ultrices velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sit amet purus vitae ex tempus bibendum in ac lectus. Integer egestas laoreet nisl at lacinia. Nam pulvinar mi a metus vulputate, interdum condimentum tellus euismod. Suspendisse placerat consectetur nunc, a porttitor felis. Aliquam molestie augue id dolor pretium, vel aliquet dolor commodo. Nunc nunc metus, lobortis nec volutpat quis, consectetur vel augue. Donec placerat quam vel nisl malesuada eleifend. Nam odio urna, faucibus id mattis vel, feugiat in leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc et sodales sapien.
          </p>
        </div>
        <div className="missionimg">
        </div>
      </div>
      <Pricing/>
      {/* <div>
        <h2>We Serve</h2>
        <div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      <Contact/>
      
      {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDr8jRLIrXMSCSeycuIHlQ4p3w3xe_NvGU&callback=initMap"></script> */}
    </>
  );
};

export default Home;
