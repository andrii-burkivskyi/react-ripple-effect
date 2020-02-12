import * as React from "react";
import { observer } from "mobx-react";

import { RippleEffectStore } from "./RippleEffect.store";
import { RippleEffectCircle } from "./RippleEffectCircle/RippleEffectCircle";

import "./RippleEffect.css";

@observer
export class RippleEffect extends React.Component<ViewOf<RippleEffectStore>> {
    render() {
        if (this.props.model.items.length === 0) { return null; }
        return (
            <div className="RippleEffect-container">
                {
                    this.props.model.items.map((item, index) => (
                        <RippleEffectCircle
                            key={item.id}
                            model={item}
                        />
                    ))
                }
            </div>
        );
    }
}