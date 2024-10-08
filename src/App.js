import "./custom.scss"
import DrumPad from "./DrumPad"
import Display from "./Display"
import Container from "react-bootstrap/Container"

function App() {
  return (
    <Container className="bg-light">
      <DrumPad />
      <Display />
    </Container>
  );
}

export default App;
