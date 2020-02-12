import * as React from "react";
import { observer } from "mobx-react";

import { CheckboxStore } from "./Checkbox.store"
import "./Checkbox.css";

@observer
export class Checkbox extends React.Component<ViewOf<CheckboxStore>> {
    render() {
        return (
          <div className="Checkbox-container">
            <label className="Checkbox-label">{this.props.model.label}</label>
            <input
              className="Checkbox-item"
              type="checkbox"
              name={this.props.model.name}
              checked={this.props.model.value}
              onChange={this.props.model.onChange}
            />
          </div>
        )
    }
}