import * as React from "react";
import { observer } from "mobx-react";
import { RegularExampleStore } from "./RegularExample.store";

import { RippleEffect } from "../../components/RippleEffect/RippleEffect";

import "./RegularExample.css"

@observer
export class RegularExample extends React.Component<ViewOf<RegularExampleStore>> {
    render() {
        return (
            <div className="RegularExample-container">
                <div
                    className="RegularExample-item"
                    ref={this.props.model.rippleEffect.ref}
                    onMouseDown={this.props.model.rippleEffect.onMouseDown}
                    onMouseUp={this.props.model.rippleEffect.clearFirstCircle}
                    onMouseLeave={this.props.model.rippleEffect.clearFirstCircle}
                >
                    <RippleEffect model={this.props.model.rippleEffect} />
                </div>
            </div>
        )
    }
}