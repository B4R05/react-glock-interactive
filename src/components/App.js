import React, { Component } from "react";
import Glock from "./Glock";
import Modes from "./Modes";
import "../styles/App.css";

class App extends Component {
  state = {
    slider: "slider",
    trigger: "trigger",
    ejectbutton: "ejectbutton",
    magazine: "magazine",
    radio: "semi",
    clicked: 0
  };

  handleShoot = () => {
    if (this.state.radio === "semi") {
      this.semiAuto();
    } else {
      this.fullAuto();
    }
  };

  semiAuto = () => {
    if (this.state.clicked === 6) {
      this.setState({
        slider: "slider slider-back-only",
        trigger: "trigger press-trigger"
      });
    } else {
      this.setState({
        slider: "slider back-and-forth-once",
        trigger: "trigger press-trigger",
        clicked: this.state.clicked + 1
      });

      setTimeout(() => {
        this.setState({ slider: "slider", trigger: "trigger" });
      }, 220);
    }
  };

  fullAuto = () => {
    if (this.state.clicked !== 6) {
      this.setState({
        trigger: "trigger hold-trigger",
        slider: "slider back-and-forth"
      });

      setTimeout(() => {
        this.setState({
          slider: "slider slider-back-only",
          trigger: "trigger",
          clicked: 6
        });
      }, 720);
    }
  };

  reLoad = () => {
    if (this.state.slider === "slider slider-back-only") {
      this.setState({
        ejectbutton: "ejectbutton ejectbutton-press",
        magazine: "magazine eject-then-load"
      });

      setTimeout(() => {
        this.setState({
          ejectbutton: "ejectbutton",
          magazine: "magazine",
          slider: "slider post-loading-pull",
          trigger: "trigger",
          clicked: 0
        });
      }, 900);
    }
  };

  handleRadio = event => {
    this.setState({ radio: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Glock
          slider={this.state.slider}
          trigger={this.state.trigger}
          ejectbutton={this.state.ejectbutton}
          magazine={this.state.magazine}
        />
        <button onClick={this.handleShoot}>Shoot</button>
        <button onClick={this.reLoad}>Reload</button>
        <Modes toggle={this.handleRadio} />
      </div>
    );
  }
}
export default App;
