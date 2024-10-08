import { useContext } from "react"
import { DisplayContext } from "./App"

function Display(props){
    const [sound] = useContext(DisplayContext)

    return <div id="display">
        {sound}
    </div>
}

export default Display