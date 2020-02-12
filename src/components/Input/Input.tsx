import * as React from "react";
import { observer } from "mobx-react";

import { InputStore } from "./Input.store"
import "./Input.css";

@observer
export class Input extends React.Component<ViewOf<InputStore>> {
    render() {
        return (
          <div className="Input-container">
            <label className="Input-label">{this.props.model.label}</label>
            <input
              className="Input-item"
              type="text"
              name={this.props.model.name}
              value={this.props.model.value}
              onChange={this.props.model.onChange}
            />
          </div>
        )
    }
}