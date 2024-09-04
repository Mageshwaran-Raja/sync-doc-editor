import React from "react";
import "../../Styles/Overall.css";
import { BsUpload } from "react-icons/bs";
import "../../index.css";
import { Localization } from "../constants/constant";
import SearchContent from "../universalsearchComponent/SearchContent";
import TreeView from "../treeview/TreeView";

function Leftcontainer() {
  return (
    <>
      {/* header */}
      <div className="header-border">
        <div className=" pd-20 display-flex justify-space-between ">
          <div>
            <p>{Localization.DocumentHeader}</p>
          </div>
          <div className="display-flex justify-space-between">
            <div className="mt-4 pd_left-right4">
              <BsUpload />
            </div>
            <div>
              <p className="upload-docs fw500">{Localization.UploadDocuments}</p>
            </div>
          </div>
        </div>
      </div>
      {/* search component */}
      <div className="pd-20">
        <SearchContent/>
      </div>
      {/* content */}
      <div className="pd-20">
        <div className="display-flex justify-space-between">
          <div>
            <p className="text-blue-700">{Localization.ListofDocuments}</p>
          </div>
          <div>
            <button className="bg-gray-400 text-white px-3 rounded">{Localization.Open}</button>
          </div>
        </div>
        {/* scroll content */}
        <div className="scroll-content">
            <TreeView/>
        </div>
      </div>
    </>
  );
}

export default Leftcontainer;
