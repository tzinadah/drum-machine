import { useContext } from "react"
import { DisplayContext } from "./App"

function Display(props){
    const [key] = useContext(DisplayContext)
    const sound = props.sounds.find((sound)=> sound.key === key);
    

    return <div id="display">
        {sound? sound.name : ""}
    </div>
}

export default Display