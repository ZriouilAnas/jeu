import "./App.css";
import Case from "./games/case/case";
import Color from "./games/color/color";
import Word from "./games/word/word";
import Winner from "./games/winner/winner";
import Reward from "./games/reward/reward";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Case />} />
          <Route path="/color" element={<Color />} />
          <Route path="/word" element={<Word />} />
          <Route path="/winner" element={<Winner />} />
          <Route path="/reward" element={<Reward />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
