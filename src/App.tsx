import * as React from 'react';
import './App.css';
import { State } from "./state";
import { RegularExample } from "./containers/RegularExample/RegularExample";
import { CircleExample } from "./containers/CircleExample/CircleExample";
import { TriangleExample } from "./containers/TriangleExample/TriangleExample";
import { ColorAndUnboundExample } from "./containers/ColorAndUnboundExample/ColorAndUnboundExample";

class App extends React.Component<ViewOf<State>> {
  render() {
    return (
      <div className="App">
        <div className="App-test-components">
          <RegularExample model={this.props.model.regularExample} />
          <CircleExample model={this.props.model.circleExample} />
          <TriangleExample model={this.props.model.triangleExample} />
          <ColorAndUnboundExample model={this.props.model.colorAndUnboundExample} />
        </div>
      </div>
    );
  }
}

export default App;
