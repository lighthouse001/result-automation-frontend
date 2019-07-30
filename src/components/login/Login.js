import React, { Component } from "react";
import { MDCTextField } from "@material/textfield";
import { MDCFloatingLabel } from "@material/floating-label";


class SignUp extends Component {

  componentDidMount() {
    const text = [].map.call(
      document.querySelectorAll(".mdc-text-field"),
      function(el) {
        return new MDCTextField(el);
      }
    );
    console.log(text);
    [].map.call(document.querySelectorAll(".mdc-floating-label"), function(el) {
      return new MDCFloatingLabel(el);
    });
  }



  render() {
    return (
      <React.Fragment>
        <div className="signup">
          <div className="signup__wrapper">
            <div className="signup__title-wrapper">
              <span className="signup__title"> LoginForm</span>
            </div>
            <div className="mdc-text-field signup__input">
              <input
                type="text"
                id="username1"
                className="mdc-text-field__input"
              />
              <label htmlFor="username1" className="mdc-floating-label">
                UserName
              </label>
              <div className="mdc-line-ripple" />
            </div>

            <div className="mdc-text-field signup__input mt-10">
              <input
                type="password"
                id="username1"
                className="mdc-text-field__input"
              />
              <label htmlFor="username1" className="mdc-floating-label">
                Secret
              </label>
              <div className="mdc-line-ripple" />
            </div>
 
            <button className="mdc-button mdc-button--raised width-100 mt-10">
              Login
            </button>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default SignUp;
