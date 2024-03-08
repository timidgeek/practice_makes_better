// Sample quiz question object
const quizQuestion = {
  question: "Can you breathe the air outside?",
  answers: [
    { answer: "yes", value: 0 },
    { answer: "no", value: 8 },
    { answer: "i dont know", value: 5 },
    { answer: "yes, but only once", value: 10 }
  ]
};

// Calculate score based on selected answer
function calculateScore(selectedAnswer) {
  let totalScore = 0;

  // Find the selected answer in the quizQuestion's answers array
  const selected = quizQuestion.answers.find(answer => answer.answer === selectedAnswer);

  // If the selected answer exists, add its value to the total score
  if (selected) {
    totalScore += selected.value || 0;
  }

  return totalScore;
}

// Determine the result based on the score
function determineResult(score) {
  let result = '';

  if (score <= 20) {
    result = 'Answer A';
  } else if (score > 20 && score <= 50) {
    result = 'Answer B';
  } else {
    result = 'Answer C';
  }

  return result;
}

// Example usage:
const selectedAnswer = "yes, but only once"; // Replace this with the user's selected answer
const score = calculateScore(selectedAnswer);
const result = determineResult(score);

console.log(`Total Score: ${score}`);
console.log(`Result: ${result}`);
