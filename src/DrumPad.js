import { useContext, useEffect } from "react"
import { DisplayContext } from "./App"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function DrumPad(props){

  useEffect(()=>{
    window.addEventListener("keydown", handleKeyPress)
  },[])

    const [key, setKey] = useContext(DisplayContext);
    
    function handleClick(e){
        setKey(e.target.innerText.toLowerCase())
        playSound(e.target.innerText.toLowerCase())
    }
    
    function handleKeyPress(e){
      switch(e.key){
        case "q":
        case "w":
        case "e":
        case "a":
        case "s":
        case "d":
        case "z":
        case "x":
        case "c":    
          setKey(e.key)
          playSound(e.key)
          break;
        default:
          break;
      }
    }
  
    

    function playSound(soundKey){
      const sound = props.sounds.find((sound)=> sound.key === soundKey);
      const audio = new Audio(sound.url);
      audio.play()

    }
  
    return (
    <div className="drum-pad">
        <Row xs={3}>
          <Col xs={1}>
            <Button variant="secondary" onClick={handleClick}>Q</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary" onClick={handleClick}>W</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary" onClick={handleClick}>E</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Button variant="secondary" onClick={handleClick}>A</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary" onClick={handleClick}>S</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary" onClick={handleClick}>D</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Button variant="secondary" onClick={handleClick}>Z</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary" onClick={handleClick}>X</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary" onClick={handleClick}>C</Button>
          </Col>
        </Row>
      </div>)
}

export default DrumPad;