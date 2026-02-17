import React from "react";

function MoodSummary({ moods }) {
  // count moods
  const moodCount = moods.reduce((acc, item) => {
    acc[item.mood] = (acc[item.mood] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="mood-summary">
      <h2>Mood Summary</h2>

      {moods.length === 0 && <p>No data to analyze yet.</p>}

      <ul>
        {Object.keys(moodCount).map((mood) => (
          <li key={mood}>
            {mood}: {moodCount[mood]} day(s)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodSummary;

