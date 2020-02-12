import { observable, set, action, observe, computed } from "mobx";

interface InitProps {
    dx: number;
    dy: number;
    diagonal: number;
    color: string;
    onClear: (item: RippleEffectCircleStore) => void;
}

export enum AnimationStatus {
    INIT = "init",
    CLEAR = "clear",
}

export class RippleEffectCircleStore {
    constructor(props: InitProps) {
        set(this, props)

        setTimeout(this.readyForClearAnimation, 500)

        observe(this, "shouldAnimateClear", (change) => {
            if (change.newValue) {
                setTimeout(() => this.onClear(this), 200);
            }
        })
    }

    @observable id = Date.now();
    @observable dx = 0;
    @observable dy = 0;
    @observable diagonal = 0;
    @observable color!: string;
    @observable onClear = (item: RippleEffectCircleStore) => {};

    @observable animationStatus = AnimationStatus.INIT;
    @observable readyAnimationStatus = AnimationStatus.INIT;

    @action animateClear = () => {
        this.animationStatus = AnimationStatus.CLEAR;
    }

    @action readyForClearAnimation = () => {
        this.readyAnimationStatus = AnimationStatus.CLEAR;
    }

    @computed get shouldAnimateClear(): boolean {
        return this.animationStatus === AnimationStatus.CLEAR && this.readyAnimationStatus === AnimationStatus.CLEAR;
    }

    @computed get className(): string {
        return this.shouldAnimateClear ? "RippleEffectCircle-clear" : "RippleEffectCircle-init"
    }

    @computed get styles(): React.CSSProperties {
        return {
            top: this.dy,
            left: this.dx,
            width: this.diagonal,
            height: this.diagonal,
            backgroundColor: this.color
        }
    }

}