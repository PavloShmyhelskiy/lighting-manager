import { useState, useEffect } from "react";
import Presets from "./Presets";
import Groups from "./Groups";

function Settings(props) {
    const [presets, setPresets] = useState(props.presets)
    const [currentPreset, setCurrentPres] = useState(props.currentPreset);
    const addPreset = ()=>{
        setPresets([...presets, [{color: "#000000", ids:[]}]])
        props.setPresets([...presets, [{color: "#000000", ids:[]}]])
    }
    const changePreset = (e)=>{
        localStorage.setItem("currentPreset", e.target.id.toString());
        localStorage.setItem("currentGroup", '0');
        setCurrentPres(presets[e.target.id])
        props.setCurrentPres(presets[e.target.id])
        if (e.target.className !== "activePreset"){
            let buf = document.getElementsByClassName("activePreset")
            for (let i=0; i< buf.length; i){
                buf[i].className = "preset"
            }; 
            e.target.className = "activePreset";
        }
    }
    const addGroup = ()=>{
        setCurrentPres([...currentPreset, {color: "#000000", ids:[]}])
        props.setCurrentPres([...currentPreset, {color: "#000000", ids:[]}])
    }
    useEffect(() => {
        let buffer = presets;
        buffer[localStorage.getItem("currentPreset")] = currentPreset;
        localStorage.setItem("presets", JSON.stringify(buffer))
    },[currentPreset, presets])
    const changeGroup = (e)=>{
        localStorage.setItem("currentGroup", e.target.id.toString());
        props.setGroup(currentPreset[e.target.id])
    }
    return (
        <>
        <div className="settings">
            <h1>Lighting manager</h1>
            <Presets presets={presets} addPreset={addPreset} changePreset={changePreset}></Presets>
            <Groups groups={currentPreset} addGroup={addGroup} changeGroup={changeGroup}></Groups>
        </div>
        </>
    )
}
export default Settings;