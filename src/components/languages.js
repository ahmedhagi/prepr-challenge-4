import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function Languages(){

    const [selected, setSelected] = useState("US");

    return(
        <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            countries={["US", "ES", "DE", "FR", "IT"  ]}
            customLabels={{ US: "English", ES: "Español",  DE :"Deutsch",  FR :"Français",  IT :"Italiano" }}
            className="menu-flags"
            selectButtonClassName="menu-flags-button"
        />


       
    )
}