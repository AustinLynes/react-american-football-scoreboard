//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  var score_h = 0;
  const [home_value, set_homeValue] = useState(score_h);
  var score_a = 0;
  const [away_value, set_awayValue] = useState(score_a);

  function handle_Score(target, running_score, last_score, _modifier) {
    running_score = last_score;
    if(target==='home'){
    set_homeValue(running_score + _modifier);
    }else if(target==='away'){
      set_awayValue(running_score + _modifier);
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{home_value}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away_value}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => handle_Score('home',score_h, home_value, 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => handle_Score('home',score_h, home_value, 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => handle_Score('away',score_a, away_value, 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => handle_Score('away',score_a, away_value, 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
