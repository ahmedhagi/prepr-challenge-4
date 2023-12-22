import { MdFormatAlignCenter, MdFormatAlignLeft, MdFormatAlignRight, MdTitle, MdOutlineLink   } from "react-icons/md";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import {  useEffect, useState } from "react";


export default function ContentCard(){

    const [toggle, setToggle] = useState(1);

    useEffect(() => {
        switch(toggle){
            case 0 :
                document.querySelector('body').style.textAlign = 'center';
                break
            case 1 :
                document.querySelector('body').style.textAlign = 'left';
                break
            case 2 :
                document.querySelector('body').style.textAlign = 'right';
                break
        
            default:
                document.querySelector('body').style.textAlign = 'left';
                break
        }

       
      }, [toggle]);

    return(
        <div className="content-card acc-card">
            <div className="card-title">Content Adjustments</div>
            <div className="settings">
                <div className="setting align-center" onClick={ e => setToggle(0)}>
                    <MdFormatAlignCenter/>
                    Align Center
                </div>
                <div className="setting align-left" onClick={ e => setToggle(1)}>
                    <MdFormatAlignLeft/>
                    Align Left
                </div>
                <div className="setting align-right" onClick={ e =>  setToggle(2)}>
                    <MdFormatAlignRight/>
                    Align Right
                </div>
                <div className="setting">
                    <MdTitle/>
                    Highlight Titles
                </div>
                <div className="setting">
                        <MdOutlineLink/>
                        Highlight Links
                </div>
                <div className="setting">
                        <HiOutlineMagnifyingGlassPlus/>
                        Highlight Titles
                </div>
            </div>
           
                

        </div>
    )
}