import React, { useState } from "react";

function MoodForm({ moods, setMoods }) {
  // state for selected mood
  const [mood, setMood] = useState("Happy");

  // state for user note
  const [note, setNote] = useState("");

  // state for AI feedback
  const [aiFeedback, setAiFeedback] = useState("");

  // AI feedback logic
  const generateAIFeedback = (mood, note) => {
    if (!note || note.length < 5) {
      return "Tell me a bit more about your day 🙂";
    }

    switch (mood) {
      case "Happy":
        return "That’s great to hear! Keep smiling 😄";
      case "Sad":
        return "It sounds like a tough day. Stay strong 💪";
      case "Neutral":
        return "A calm and steady day is good too 🙂";
      case "Excited":
        return "Nice! Your excitement is contagious 🚀";
      case "Anxious":
        return "Take a deep breath. You’ve got this 🧘";
      default:
        return "Thanks for sharing your feelings 💙";
    }
  };

  // when user submits form
  const handleSubmit = (e) => {
    e.preventDefault();

    const feedback = generateAIFeedback(mood, note);
    setAiFeedback(feedback);

    const newMood = {
      mood: mood,
      note: note,
      aiResponse: feedback,
      date: new Date().toLocaleDateString(),
    };

    setMoods([newMood, ...moods]);

    // clear input
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="mood-form">
      <h2>Add Today’s Mood</h2>

      <label>Mood</label>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option>Happy</option>
        <option>Sad</option>
        <option>Neutral</option>
        <option>Excited</option>
        <option>Anxious</option>
      </select>

      <label>How was your day?</label>
      <textarea
        placeholder="Write how your day was..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        required
      />

      <button type="submit">Save Mood</button>

      {aiFeedback && <p className="ai-text">AI: {aiFeedback}</p>}
    </form>
  );
}

export default MoodForm;
