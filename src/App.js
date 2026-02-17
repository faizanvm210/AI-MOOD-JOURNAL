import React, { useState, useEffect } from "react";
import MoodForm from "./components/MoodForm";
import MoodSummary from "./components/MoodSummary";
import MoodList from "./components/MoodList";
import "./App.css";

function App() {
  const [moods, setMoods] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem("moods"));
    if (savedMoods) {
      setMoods(savedMoods);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  return (
    <div className="page">
      <div className="card">
        <h1>AI Mood Journal</h1>

        <MoodForm moods={moods} setMoods={setMoods} />
        <MoodSummary moods={moods} />
        <MoodList moods={moods} setMoods={setMoods} />
      </div>
    </div>
  );
}

export default App;
