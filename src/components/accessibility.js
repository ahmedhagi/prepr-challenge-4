import "./accessibility.css"
import { MdOutlineAccessible } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoRepeat } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import ToggleCard from "./toggleCard";
import ContentCard from "./contentCard";
import ColorCard from "./colorCard";
import OrientationCard from "./orientationCard";
import Languages from "./languages";


export default function Accessability(){

    

    const handleClick = () => {
    
            document.querySelector('body').style.textAlign = 'left';   
        }

    

    return(
        <>
            
            <button type="button" className="acc-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i><MdOutlineAccessible /></i>
            </button>

            
            <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="close-btn btn" data-bs-dismiss="modal" aria-label="Close"><IoMdClose /></button>
                <Languages/>
                    <h5 className="modal-title" id="staticBackdropLabel">Accessability Adjustments</h5>
                    <div className="header-btns">
                        <button type="button" className="pill-btn btn btn-primary" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <IoRepeat />
                             Reset Settings
                        </button>
                        <button type="button" className="pill-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <FaRegBookmark />
                             Statement
                        </button>
                        <button type="button" className="pill-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <IoEyeOffOutline />
                             Hide Interface
                        </button>

                    </div>
                    <div className="search-bar">
                        <input type="text" className="form-control" placeholder="Unclear content? Search in dictionary..."/>
                        <i className="search-icon"><FaSearch/></i>
                        <i className="caret-down"><RxCaretDown/></i>
                    </div>
                </div>
                <div className="modal-body">
                    <ToggleCard/>
                    <ContentCard/>
                    <ColorCard/>
                    <OrientationCard/>
                </div>
                <div className="modal-footer">
                    <a href="#link"> 
                        <img alt="" src={require("../assets/footer.png")}></img>
                    </a>
                </div>
                </div>
            </div>
            </div>
                

        </>
    
    )

}