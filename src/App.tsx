import React from "react";
import "./App.css";
import DocuEditor from "./DocuEditor";
import DocuViewer from "./DocuViewer";
import CustomEdit from "./CustomEdit";
import Checkbox from "./TreeView";
import Forclosure from "./components/overall-containerComponent/Forclosure";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <DocuViewer />
      <div className="app-container">
        <div className="checkbox-container" style={{ flex: "0.75" }}>
          <div>
            <span>List of documents</span>
          </div>
          <Checkbox />
        </div>
        <DocuViewer />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Forclosure} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
