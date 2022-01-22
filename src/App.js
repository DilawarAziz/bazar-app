import logo from "./logo.svg";
import "./style/top-rating.css";
import "./style/footer.css";
import "./App.css";
import './style/media.css'
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
          
      <Deals heading={"Flash Deals"} type={"deals"} data={dealsdata} />
      <Topcategories />
      <Rating  />

      <Arrival heading={"New Arrivals"} img={flash}/>
      <Arrival main={"discount-main"} star={"discount-star-pt"} img={img} heading={"Big Discounts"} item={"discount-item"}  />
      <Cars  data={carsdata} />
      <Cars data={mobilesdata} />
      <Banner/>
      <Cars heading={"Cars"} data={mobilesdata} />
      <Categories/>
      <Deals data={moredata} heading={"More For You"} main={"foryou-main"} item={"foryou-item"} />
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
