import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function DrumPad(props){
    return (
    <div className="drum-pad">
        <Row xs={3}>
          <Col xs={1}>
            <Button variant="secondary">Q</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary">W</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary">E</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Button variant="secondary">A</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary">S</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary">D</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Button variant="secondary">Z</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary">X</Button>
          </Col>
          <Col xs={1}>
            <Button variant="secondary">C</Button>
          </Col>
        </Row>
      </div>)
}

export default DrumPad;