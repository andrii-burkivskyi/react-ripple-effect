import * as React from "react";
import { observer } from "mobx-react";
import { ColorAndUnboundExampleStore } from "./ColorAndUnboundExample.store";

import { RippleEffect } from "../../components/RippleEffect/RippleEffect";

import "./ColorAndUnboundExample.css"

@observer
export class ColorAndUnboundExample extends React.Component<ViewOf<ColorAndUnboundExampleStore>> {
    render() {
        return (
            <div className="ColorAndUnboundExample-container">
                <div
                    className="ColorAndUnboundExample-item"
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