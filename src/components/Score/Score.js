import React from "react";
import "./Score.css";

function Score(props) {
    return (
        <div class="score-box">
            <h4>Score: {props.Score}</h4>
            <h4>High Score: {props.HighScore}</h4>
        </div>
    );
}
export default Score;
