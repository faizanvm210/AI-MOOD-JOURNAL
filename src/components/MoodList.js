import React from "react";

function MoodList({ moods, deleteMood }) {
  return (
    <div className="mood-list">
      <h2>My Mood History</h2>

      {moods.length === 0 && <p>No moods added yet.</p>}

      {moods.map((item, index) => (
        <div className="mood-item" key={index}>
          <h3>
            {item.mood} — {item.date}
          </h3>

          <p><strong>Note:</strong> {item.note}</p>

          <p className="feedback">
            <strong>AI:</strong> {item.feedback}
          </p>

          <button onClick={() => deleteMood(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MoodList;
