function Presets(props) {
    const presets = props.presets;
    const preList = presets.map((pre,idx)=>{
        return(
        <li key={idx} id={idx} onClick={props.changePreset} className="preset">
            Preset {idx + 1}
        </li>)
    })
    return (
        <div className="pressets">
            <ul className="pressetsList">
                {preList}
            </ul>
            <button className="addPreset" onClick={props.addPreset}>Add Preset</button>
        </div>
    )
}
export default Presets;