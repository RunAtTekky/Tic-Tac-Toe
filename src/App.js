import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";
import Grid from "./component/Grid";

function App() {
  const [greenScore, setGreenScore] = useState(0);
  const [redScore, setRedScore] = useState(0);
  return (
    <div className="App">
      <Counter count={greenScore} color={"Green"} />
      <Grid setGreenScore={setGreenScore} setRedScore={setRedScore} />
      <Counter count={redScore} color={"Red"} />
    </div>
  );
}

export default App;
