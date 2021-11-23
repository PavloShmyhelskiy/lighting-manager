function Keyboard({ color, preset, group, changeG }) {
    const onClick = (event) => {
        if (group.ids.includes(event.target.id)) {
            for (let i = 0; i < group.ids.length; i++) {
                if (group.ids[i] === event.target.id) {
                    group.ids.splice(i, 1);
                }
            }
            event.target.style.color = "#000000";
            changeG(group);
        }
        else {
            group.ids = [...group.ids, event.target.id];
            event.target.style.color = color;
        }
    }
    
    return (
        <div className="keyboard" dir="ltr">
            <div className="keyboard-row">
                <button id="K192" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">'</span>
                </button>
                <button id="K49" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">1</span>
                </button>
                <button id="K50" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">2</span>
                </button>
                <button id="K51" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">3</span>
                </button>
                <button id="K52" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">4</span>
                </button>
                <button id="K53" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">5</span>
                </button>
                <button id="K54" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">6</span>
                </button>
                <button id="K55" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">7</span>
                </button>
                <button id="K56" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">8</span>
                </button>
                <button id="K57" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">9</span>
                </button>
                <button id="K48" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">0</span>
                </button>
                <button id="K189" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">-</span>
                </button>
                <button id="K187" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">=</span>
                </button>
                <button id="K8" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">Back</span>
                </button>
            </div>
            <div className="keyboard-row">
                <button id="K9" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">Tab</span>
                </button>
                <button id="K81" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">й</span>
                </button>
                <button id="K87" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">ц</span>
                </button>
                <button id="K69" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">у</span>
                </button>
                <button id="K82"
                    type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">к</span>
                </button>
                <button id="K84" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">е</span>
                </button>
                <button id="K89" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">н</span>
                </button>
                <button id="K85" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">г</span>
                </button>
                <button id="K73" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">ш</span>
                </button>
                <button id="K79" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">щ</span>
                </button>
                <button id="K80" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">з</span>
                </button>
                <button id="K219" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">х</span>
                </button>
                <button id="K221" type="button" className="vk-btn" onClick={onClick} >
                    <span className="vk-cap">ї</span>
                </button>
                <button id="K220" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">ґ</span>
                </button>
            </div>
            <div className="keyboard-row">
                <button id="K20" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap vk-sf-b vk-sf-c20">Caps</span>
                </button>
                <button id="K65" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">ф</span>
                </button>
                <button id="K83" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">і</span>
                </button>
                <button id="K68" type="button" className="vk-btn" onClick={onClick} >
                    <span className="vk-cap">в</span>
                </button>
                <button id="K70" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">а</span>
                </button>
                <button id="K71" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">п</span>
                </button>
                <button id="K72" type="button" className="vk-btn" onClick={onClick} >
                    <span
                        className="vk-cap">р</span>
                </button>
                <button id="K74" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">о</span>
                </button>
                <button id="K75" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">л</span>
                </button>
                <button id="K76" type="button" className="vk-btn" onClick={onClick} >
                    <span className="vk-cap">д</span>
                </button>
                <button id="K186" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">ж</span>
                </button>
                <button id="K222" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">є</span>
                </button>
                <button id="K13" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">Enter</span>
                </button>
            </div>
            <div className="keyboard-row" >
                <button id="K16" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap vk-sf-b vk-sf-c16">Shift</span>
                </button>
                <button id="K90" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">я</span>
                </button>
                <button id="K88" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">ч</span>
                </button>
                <button id="K67" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">с</span>
                </button>
                <button id="K86" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">м</span>
                </button>
                <button id="K66" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">и</span>
                </button>
                <button id="K78" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">т</span>
                </button>
                <button id="K77" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">ь</span>
                </button>
                <button id="K188" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">б</span>
                </button>
                <button id="K190" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">ю</span>
                </button>
                <button id="K191" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap">.</span>
                </button>
                <button id="K16" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap vk-sf-b vk-sf-c16" >Shift</span>
                </button>
            </div>
            <div className="keyboard-row" >
                <button id="K273" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap vk-sf-c273">Ctrl</span>
                </button>
                <button id="K274" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap vk-sf-c273">Alt</span>
                </button>
                <button id="K32" type="button" className="vk-btn" onClick={onClick}>
                    <span>Space</span>
                </button>
                <button id="K275" type="button" className="vk-btn" onClick={onClick}>
                    <span className="vk-cap vk-sf-c273">Alt</span>
                </button>
                <button id="K276" type="button" className="vk-btn" onClick={onClick} >
                    <span className="vk-cap vk-sf-c273">Ctrl</span>
                </button>
            </div>

        </div>
    )
}
export default Keyboard;