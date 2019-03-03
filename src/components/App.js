import React, { Component } from "react";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  state = { isOpen: true };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className={"container"}>
        <button
          className={cx("toggler", {
            "toggler--active": this.state.isOpen
          })}
          onClick={this.toggle}>
          Menu
        </button>
        <CSSTransition
          in={this.state.isOpen}
          timeout={350}
          classNames="balloon"
          unmountOnExit
          appear>
          <div className={"menu"}>
            <ul className={"list"}>
              <li className={"list-item"}>Home</li>
              <li className={"list-item"}>About</li>
              <li className={"list-item"}>Shop!</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
export default App;
