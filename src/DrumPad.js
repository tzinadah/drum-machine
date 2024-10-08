import { useContext } from "react"
import { DisplayContext } from "./App"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function DrumPad(props){

    const [sound, setSound] = useContext(DisplayContext);

    function handleClick(e){
        setSound(e.target.innerText)
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