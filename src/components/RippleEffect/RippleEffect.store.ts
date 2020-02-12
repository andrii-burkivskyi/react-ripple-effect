import * as React from "react";
import { observable, action, set } from "mobx";
import { RippleEffectCircleStore, AnimationStatus } from "./RippleEffectCircle/RippleEffectCircle.store";

type ValidRefComponents = HTMLDivElement;

interface InitProps {
    color?: RippleEffectStore["color"];
    isUnbound?: RippleEffectStore["isUnbound"];
}

export class RippleEffectStore {
    constructor(props?: InitProps) {
        if (props) {
            set(this, props)
        }
    }
    @observable ref = React.createRef<ValidRefComponents>()
    @observable items = observable<RippleEffectCircleStore>([]);
    @observable color = "rgba(0, 0, 0, 0.3)";
    @observable isUnbound = false;

    @action onMouseDown = (element: React.MouseEvent<ValidRefComponents>) => {
        if (!this.ref.current) { return; }
        // const rect = this.ref.current?.getBoundingClientRect();
        this.ref.current.style.position = "relative";

        if (!this.isUnbound) {
            this.ref.current.style.overflow = "hidden";
        }

        const maxSize = Math.hypot(this.ref.current.offsetWidth ?? 0, this.ref.current.offsetHeight ?? 0) * 2;
        const dx = element.pageX - (this.ref.current.offsetLeft ?? 0);
        const dy = element.pageY - (this.ref.current.offsetTop ?? 0);
        this.items.push(new RippleEffectCircleStore({
            dx,
            dy,
            color: this.color,
            diagonal: maxSize,
            onClear: this.deleteItem,
        }));
    }

    @action clearFirstCircle = () => {
        const circle = this.items.find((item) => { return item.animationStatus !== AnimationStatus.CLEAR})
        if (circle) {
            circle.animateClear();
        }
    }

    @action deleteItem = (circle: RippleEffectCircleStore) => {
        this.items.replace(this.items.filter((item) => item !== circle))
    }
}