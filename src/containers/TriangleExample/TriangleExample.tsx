
import * as React from "react";
import { observer } from "mobx-react";
import { TriangleExampleStore } from "./TriangleExample.store";

import { RippleEffect } from "../../components/RippleEffect/RippleEffect";

import "./TriangleExample.css"

@observer
export class TriangleExample extends React.Component<ViewOf<TriangleExampleStore>> {
    render() {
        return (
            <div className="TriangleExample-container">
                <div
                    className="TriangleExample-item"
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