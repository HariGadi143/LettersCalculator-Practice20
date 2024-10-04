import React, { Component } from "react";
import styles from "./LettersCalculator.module.css";

class LettersCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ inputText: value });
  };
  render() {
    const { inputText } = this.state;

    return (
      <div className={styles.mainContainer}>
        <div className={styles.calculatorWrapper}>
          <div className={styles.leftWrapper}>
            <h1>Calculate the Letters you enter</h1>
            <label>Enter the phrase</label>
            <input
              name="inputText"
              value={inputText}
              placeholder="Enter the phrase..."
              onChange={(event) => {
                this.handleInputChange(event);
              }}
            />
            <p>{`No of letters: ${inputText.length}`}</p>
          </div>
          <div className={styles.righContainer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters_calculator"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LettersCalculator;
