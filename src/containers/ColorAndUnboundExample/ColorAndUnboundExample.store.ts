import { RippleEffectStore } from "../../components/RippleEffect/RippleEffect.store";

export class ColorAndUnboundExampleStore {
    rippleEffect = new RippleEffectStore({
        color: "rgba(155, 0, 0, 0.4)",
        isUnbound: true
    });

}