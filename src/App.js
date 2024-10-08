import "./custom.scss"
import DrumPad from "./DrumPad"
import Container from "react-bootstrap/Container"

function App() {
  return (
    <Container>
      <DrumPad />
      <div id="display"></div>
    </Container>
  );
}

export default App;
