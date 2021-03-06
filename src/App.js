import logo from "./logo.svg";
import "./style/top-rating.css";
import "./style/footer.css";
import "./App.css";
import bike from './images/bike.jpg'
import glasses from './images/glasses.jpg'
import './style/media.css'
import shoes from './images/Carousel.png'
import car3 from './images/car3.jpg'
import img from "./images/watch.png";
import img1 from "./images/Carousel.png";
import img2 from "./images/flash-3.png";
import img4 from './images/camera-1.png'
import flash from './images/flash4.png'
import Navbar from "./components/navbar";
import Carousel from "./components/Carousel";
import Deals from "./components/deals";
import Topcategories from "./components/top-categories";
import Rating from "./components/rating";
import Arrival from "./components/arrival";
import Cars from "./components/cars";
import Banner from "./components/banner";
import Categories from "./components/categories";
import About from "./components/About";
import Footer from "./components/footer";
import mobileimg from './images/mobile.jpg'

function App() {
  let dealsdata = [
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    
    {
      title: "Smart Watch Black",
    },
  ];
  let carsdata = [
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
  ];
  let mobilesdata = [
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
  ];
  let moredata = [
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    {
      title: "Smart Watch Black",
    },
    
    {
      title: "Smart Watch Black",
    },
  ];
  return (
    <div>
      <Navbar />
      <Carousel />
          
      <Deals img={shoes} heading={"Flash Deals"} type={"deals"} data={dealsdata} />
      <Topcategories />
      <Rating  />

      <Arrival heading={"New Arrivals"} img={flash}/>
      <Arrival main={"discount-main"} star={"discount-star-pt"} img={img} heading={"Big Discounts"} item={"discount-item"}  />
      <Cars img={car3} heading={"Cars"} data={carsdata} />
      <Cars img={mobileimg} heading={"Mobiles"}data={mobilesdata} />
      <Banner/>
      <Cars img={glasses} heading={"Optics"} type={"Optics"} data={mobilesdata} />
      <Categories/>
      <Deals img={bike}  data={moredata} heading={"More For You"} main={"foryou-main"} item={"foryou-item"} />
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
