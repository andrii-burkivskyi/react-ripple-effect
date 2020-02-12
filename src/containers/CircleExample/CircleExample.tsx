import * as React from "react";
import { observer } from "mobx-react";
import { CircleExampleStore } from "./CircleExample.store";

import { RippleEffect } from "../../components/RippleEffect/RippleEffect";

import "./CircleExample.css";

@observer
export class CircleExample extends React.Component<ViewOf<CircleExampleStore>> {
    render() {
        return (
            <div className="CircleExample-container">
                <div
                    className="CircleExample-item"
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