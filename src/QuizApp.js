import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "What is the minimum score for a typical whitetail deer to qualify for Boone and Crockett records?",
    options: ["140 points", "150 points", "160 points", "170 points"],
    correctAnswer: 2
  },
  {
    question: "Which state has produced the most Boone and Crockett whitetail entries from 2004-2013?",
    options: ["Illinois", "Iowa", "Wisconsin", "Ohio"],
    correctAnswer: 2
  },
  {
    question: "What is the most common caliber used for harvesting trophy whitetails according to B&C records?",
    options: [".270 Winchester", ".30-06 Springfield", ".300 Winchester Magnum", "7mm Remington Magnum"],
    correctAnswer: 1
  },
  {
    question: "What time of day are most trophy whitetails harvested according to B&C records?",
    options: ["Early morning", "Mid-day", "Late afternoon", "After dark"],
    correctAnswer: 2
  },
  {
    question: "What weather condition is most favorable for harvesting trophy whitetails?",
    options: ["Heavy rain", "Strong winds", "Light overcast", "Heavy snow"],
    correctAnswer: 2
  },
  {
    question: "What is the recommended distance for field judging a trophy whitetail?",
    options: ["100 yards", "150 yards", "200 yards", "250 yards"],
    correctAnswer: 3
  },
  {
    question: "Which of these is NOT considered a key component to consistently harvesting trophy whitetails?",
    options: ["Location", "Hunting smart", "Using the latest gadgets", "Patience"],
    correctAnswer: 2
  },
  {
    question: "What is the ideal age to harvest a trophy whitetail buck according to many experts?",
    options: ["3.5 years", "4.5 years", "5.5 years", "6.5-7.5 years"],
    correctAnswer: 3
  },
  {
    question: "What is the most important factor when setting up a hunting stand?",
    options: ["Height", "Concealment", "Comfort", "Entry and exit routes"],
    correctAnswer: 3
  },
  {
    question: "Which of these is NOT a recommended practice for field photography of your trophy?",
    options: ["Clean up blood", "Take photos in natural environment", "Sit on the deer", "Include your weapon in the photo"],
    correctAnswer: 2
  }
];
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [averageScore, setAverageScore] = useState(0);
  const [totalPlays, setTotalPlays] = useState(0);

  useEffect(() => {
    console.log('QuizApp mounted');
    fetchStats();
  }, []);

  const fetchStats = async () => {
    console.log('Fetching stats...');
    try {
      const response = await fetch('/.netlify/functions/getStats');
      const stats = await response.json();
      console.log('Stats fetched:', stats);
      setAverageScore(stats.averageScore);
      setTotalPlays(stats.totalPlays);
    } catch (error) {
      console.error('Error fetching quiz stats:', error);
    }
  };

  // ... rest of your component code ...

  console.log('Rendering QuizApp', { currentQuestion, score, showResult, selectedAnswer, averageScore, totalPlays });

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* ... your JSX ... */}
    </div>
  );
};

export default QuizApp;
