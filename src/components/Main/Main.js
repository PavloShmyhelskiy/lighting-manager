import Keyboard from "./Keyboard/Keyboard";
import React, {useState, useEffect} from 'react'
import Settings from "../Settings/Settings";

function Main() {
    const [presets, setPresets] = useState(JSON.parse(localStorage.getItem("presets") || "[]"))
    const [currentPreset, setCurrentPres] = useState(presets[localStorage.getItem("currentPreset") || 0]);
    const [group, setGroup] = useState(currentPreset[localStorage.getItem("currentGroup") || 0]);
    const [color, setColor] = useState(group.color);
    const Aplly = ()=>{
        let groupbuffer = group;
        groupbuffer.color = color;
        setGroup({...groupbuffer});
        let cres = currentPreset;
        cres[localStorage.getItem("currentGroup")]=groupbuffer;
        setCurrentPres([...cres]);
        let presbuff = presets;
        presbuff[localStorage.getItem("currentPreset")][localStorage.getItem("currentGroup")]=groupbuffer;
        localStorage.setItem("presets", JSON.stringify(presbuff));
        setPresets([...presbuff])
    }
    useEffect(() => {
        setGroup(currentPreset[0]);
        currentPreset.forEach(gr=>{
            gr.ids.forEach(el => {
                document.getElementById(el).style.color=gr.color;
            })
        })
    },[currentPreset])
    useEffect(() => {
        setColor(group.color);
        group.ids.forEach(el => {
            document.getElementById(el).style.color=group.color;
        });
    },[group])
    const colorChange = (event)=>{
        setColor(event.target.value);
        group.ids.forEach(el => {
            document.getElementById(el).style.color=color;
        });
    }
    return (
        <>
        <Settings presets={presets} currentPreset={currentPreset} setPresets={setPresets} setGroup={setGroup} setCurrentPres={setCurrentPres}></Settings>
        <div className="main">
            <div className="topPanel">
                <button onClick={Aplly}>Apply</button>
                <input id="color" type="color" value={color} onChange={colorChange}/>
                <span id="text"></span>
            </div>
           <Keyboard color={color} preset={currentPreset} group={group} changeG={setGroup}></Keyboard>
        </div>
        </>
    )
}
export default Main;