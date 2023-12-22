import { MdOutlineLightMode, MdOutlineDarkMode,  } from "react-icons/md";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";

export default function ColorCard(){

   
    return(
        <div className="color-card acc-card">
            <div className="card-title">Color Adjustments</div>
            <div className="settings">
                <div className="setting">
                    <MdOutlineDarkMode/>
                    Dark Contrast
                </div>
                <div className="setting">
                        <MdOutlineLightMode/>
                        Light Contrast
                </div>
                <div className="setting">
                        <FaCircleHalfStroke/>
                        High Contrast
                </div>
                <div className="setting">
                        <FaDroplet/>
                        High Saturation
                </div>
                <div className="setting wide">
                       Adjust Text Colors
                       <div className="colors d-inline">
                            <div className="color" style={{backgroundColor:"rgb(0, 118, 180)"}}></div>
                            <div className="color" style={{backgroundColor:"rgb(122, 84, 156)"}}></div><div className="color" style={{backgroundColor:"#000"}}></div>
                            <div className="color" style={{backgroundColor:"rgb(200, 55, 51)"}}></div>
                            <div className="color" style={{backgroundColor:"rgb(208, 112, 33)"}}></div>
                            <div className="color" style={{backgroundColor:"rgb(38, 153, 159)"}}></div>
                            <div className="color" style={{backgroundColor:"rgb(77, 120, 49)"}}></div>
                            <div className="color" style={{backgroundColor:"rgb(255, 255, 255)"}}></div>
                            <div className="color" style={{backgroundColor:"rgb(0, 0, 0)"}}></div>
                       </div>
                       <a href="#link">Cancel</a>
                </div>
            
            </div>
    
        </div>
    )
}