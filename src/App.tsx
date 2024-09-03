import React from "react";
import "./App.css";
import DocuEditor from "./DocuEditor";
import DocuViewer from "./DocuViewer";
import CustomEdit from "./CustomEdit";
import Checkbox from "./TreeView";

function App() {
  return (
    <div className="App">
      {/* <DocuViewer /> */}
      {/* <CustomEdit /> */}
      <div className="app-container">
        <div className="checkbox-container" style={{ flex: "0.75" }}>
          <div>
            <span>List of documents</span>
          </div>
          <Checkbox />
        </div>
        <DocuViewer />
      </div>
    </div>
  );
}

export default App;
