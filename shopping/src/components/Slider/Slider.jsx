import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import {useState} from 'react'; 

export default function Slider(){

    const [currentSlide,setCurrentSlide] = useState(0)
    
    const [data , setData] = useState([slider1,slider2,slider3 ])

      
    const prevSlide = () => {
        console.log("recahed prev");
        setCurrentSlide( (currentSlide) => currentSlide === 0 ? 2 : currentSlide- 1)
        console.log("currentslide value",currentSlide);
    }

    const nextSlide = () => {
        console.log("recahed next");
        setCurrentSlide( (currentSlide) => currentSlide === 2 ? 0 : currentSlide + 1 )
        console.log("currentslide value",currentSlide);
    }


    return(
        <div className = "hero-section">
        <div className="Imageslider" >
          <img src={data[currentSlide]} alt=""/>
        </div>
        <div className="iconsContainer">
        <div className="navButtons">
            <div className="icon">
            <WestOutlinedIcon onClick={prevSlide}/>
            </div>
           <div  className="icon">
           <EastOutlinedIcon onClick={nextSlide}/>
           </div>
        </div>
        </div>
    </div>
    )
}
