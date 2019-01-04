import React from "react";
import "./Score.css";
// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        score: 0,
        highScore: 0
    };
    highScoreIncrement = () => {
        this.setState({ highScore: this.state.highScore + 1 });
    };
    scoreIncrement = () => {
        this.setState({ score: this.state.score + 1 });
    };
    resetScore = () => {
        this.setState({ score: 0 })
    }

    // The render method returns the JSX that should be rendered
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
