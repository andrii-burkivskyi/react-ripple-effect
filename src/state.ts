import { RegularExampleStore } from "./containers/RegularExample/RegularExample.store";
import { CircleExampleStore } from "./containers/CircleExample/CircleExample.store";
import { TriangleExampleStore } from "./containers/TriangleExample/TriangleExample.store";
import { ColorAndUnboundExampleStore } from "./containers/ColorAndUnboundExample/ColorAndUnboundExample.store";

export class State {
    regularExample = new RegularExampleStore();
    circleExample = new CircleExampleStore();
    triangleExample = new TriangleExampleStore();
    colorAndUnboundExample = new ColorAndUnboundExampleStore();
}