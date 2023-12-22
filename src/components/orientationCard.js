import { IoVolumeMuteOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { IoReaderOutline } from "react-icons/io5";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { TbMasksTheater } from "react-icons/tb";
import { MdCropFree } from "react-icons/md";

export default function OrientationCard(){

   
    return(
        <div className="ore-card acc-card">
            <div className="card-title">Orientation Adjustments</div>
            <div className="settings">
                <div className="setting">
                    <IoVolumeMuteOutline/>
                    Mute Sounds
                </div>
                <div className="setting">
                        <IoImageOutline/>
                        Hide Images
                </div>
                <div className="setting">
                        <IoReaderOutline/>
                        Read Mode
                </div>
                <div className="setting">
                        <HiOutlineLightningBolt/>
                        Stop Animations
                </div>
                <div className="setting">
                        <TbMasksTheater/>
                        Reading Mask
                </div>
                <div className="setting">
                    <MdCropFree/>
                    Highlight Hover
                </div>
               
            
            </div>
    
        </div>
    )
}