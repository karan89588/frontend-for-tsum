import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./component/homepage";
import Ytsum from "./summarizer/ytsum";
import Audiosum from "./summarizer/audiosum";
import Pdfsum from "./summarizer/pdfsum";
import Wordsum from "./summarizer/wordsum";
import Txtsum from "./summarizer/txtsum";
import Txtpastesum from "./summarizer/txtpastesum";
import Dialoguesum from "./summarizer/dialoguesum";
import Newssum from "./summarizer/newssum";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/youtubeSummary" element={<Ytsum />}></Route>
      <Route path="/audioSummary" element={<Audiosum />}></Route>
      <Route path="/pdfSummary" element={<Pdfsum />}></Route>
      <Route path="/wordSummary" element={<Wordsum />}></Route>
      <Route path="/txtSummary" element={<Txtsum />}></Route>
      <Route path="/txtpasteSummary" element={<Txtpastesum />}></Route>
      <Route path="/dialogueSummary" element={<Dialoguesum />}></Route>
      <Route path="/newsTitle" element={<Newssum />}></Route>
    </Routes>
  );
}

export default App;
