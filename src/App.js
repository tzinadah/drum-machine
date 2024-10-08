import { createContext, useState } from "react"

import DrumPad from "./DrumPad"
import Display from "./Display"

import "./custom.scss"
import Container from "react-bootstrap/Container"

export const DisplayContext = createContext();

function App() {

  const [sound, setSound] = useState("")
  
  
  return (
    <DisplayContext.Provider value={[sound, setSound]}>
      <Container className="bg-light">
        <DrumPad />
        <Display />
      </Container>
    </DisplayContext.Provider>
  );
}

export default App;
