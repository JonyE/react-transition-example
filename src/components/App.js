import React, { Component } from "react";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  state = { isOpen: true };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      highlightedMenuItem: false
    });
  };

  toggleHighlightedMenuItem = () => {
    this.setState(state => ({
      highlightedMenuItem: !state.highlightedMenuItem
    }));
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
          appear
          onEntered={this.toggleHighlightedMenuItem}
          onExit={this.toggleHighlightedMenuItem}>
          <div className={"menu"}>
            <ul className={"list"}>
              <li className={"list-item"}>Home</li>
              <li
                className={cx("list-item", {
                  "list-item--active": this.state.highlightedMenuItem
                })}>
                Profile
              </li>
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
