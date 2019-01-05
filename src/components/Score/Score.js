import React from "react";
import "./Score.css";

class Score extends React.Component {
    constructor() {
      super();
      this.state = {
        score: 0,
        highScore: 0,
      };
    }
    render() {
    return (
        <div>
            <h4>Score: {this.state.score}</h4>
            <h4>High Score: {this.state.highScore}</h4>
        </div>
    );
}
}
export default Score;
