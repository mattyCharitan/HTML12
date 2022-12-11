import { useRef } from "react";
import { useParams } from "react-router-dom"
function UseRefComp() {
    const btn1 = useRef();
    const btn2 = useRef();
    const btn3 = useRef();
    const changeColorToRed = () => {
        btn1.current.style.backgroundColor = 'red';
    }
    const changeColorToYellow = () => {
        btn2.current.style.backgroundColor = 'yellow';
    }
    const changeColorToGreen = () => {
        btn3.current.style.backgroundColor = 'green';
    }
    return (
        <div>
            <button ref={btn1} onClick={() => changeColorToRed()}>change my color to red</button>
            <button ref={btn2} onClick={() => changeColorToYellow()}>change my color to yellow</button>
            <button ref={btn3} onClick={() => changeColorToGreen()}>change my color to green</button>
        </div>

    );
}
export default UseRefComp;