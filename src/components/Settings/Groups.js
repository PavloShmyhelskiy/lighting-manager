import Circle from "./Circle";
function Groups(props) {
    const grList = props.groups.map((gr, idx)=>{
       return(
        <li className="group" id={idx} key={idx} onClick={props.changeGroup}>
                <p>Group {idx + 1}</p>
                <Circle color={gr.color}></Circle>
        </li>)
    })
    return (
        <div className="groups">
            <ul className="groupList">
                {grList}
            </ul>
            <button className="addGroup" onClick={props.addGroup}>
                Add Group
            </button>
        </div>
    )
}
export default Groups;