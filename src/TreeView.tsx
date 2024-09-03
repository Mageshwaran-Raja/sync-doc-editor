import * as ReactDOM from "react-dom";
import * as React from "react";
import { useEffect, useState } from "react";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import {
  CheckBoxComponent,
  ChangeEventArgs,
} from "@syncfusion/ej2-react-buttons";
import { PropertyPane } from "./property-pane";
import * as dataSource from "./data.json";
import "./icon.css";

const Checkbox = () => {
  const [isAutoCheck, setIsAutoCheck] = useState<boolean>(true);
  const data = dataSource as any;
  const fields: Object = {
    dataSource: data.checkboxData,
    id: "id",
    parentID: "pid",
    text: "name",
    hasChildren: "hasChild",
    iconCss: 'icon'
  };
  const onChange = (args: ChangeEventArgs): void => {
    setIsAutoCheck(args.checked);
  };
  return (
    // <div className="control-pane">
    //   <div className="col-lg-8 control-section">
        <div className="tree-control_wrapper">
          {/* Render the TreeView with checkboxes */}
          <TreeViewComponent
            fields={fields}
            showCheckBox={true}
            autoCheck={isAutoCheck}
          />
        </div>
    //   </div>
      /* <div className="col-lg-4 property-section">
        <PropertyPane title="Properties">
          <table id="property" title="Properties">
            <tbody>
              <tr>
                <td>
                  <div>
                    <CheckBoxComponent
                      id="check"
                      checked={true}
                      label="Auto Check"
                      change={onChange.bind(this)}
                    ></CheckBoxComponent>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </PropertyPane>
      </div> */
    // </div>
  );
};
export default Checkbox;
