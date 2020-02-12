import * as React from "react";
import { observer } from "mobx-react";
import { RippleEffectCircleStore } from "./RippleEffectCircle.store";

import "./RippleEffectCircle.css";

@observer
export class RippleEffectCircle extends React.Component<ViewOf<RippleEffectCircleStore>> {
    render() {
        return (
            <div
                className={this.props.model.className}
                style={this.props.model.styles}
            />
        );
    }

}