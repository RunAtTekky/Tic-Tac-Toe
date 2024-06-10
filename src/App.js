import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";
import Grid from "./component/Grid";

function App() {
  const [greenScore, setGreenScore] = useState(0);
  const [redScore, setRedScore] = useState(0);
  return (
    <div className="App">
      <Counter className="greenCounter" count={greenScore} color={"green"} />
      <Grid setGreenScore={setGreenScore} setRedScore={setRedScore} />
      <Counter className="redCounter" count={redScore} color={"red"} />
    </div>
  );
}

export default App;
