import React, { useState } from 'react';
import Flashcard from './FlashCard';
import questions from "../Data/QuestionsEn.json";

const cardsData = questions;

const FlashcardContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedValues, setSelectedValues] = useState({});
    const [warning, setWarning] = useState(null);  // State to hold the warning message
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the test has been submitted
    const [scores, setScores] = useState({
        Visual: 0,
        Auditory: 0,
        Verbal: 0,
        Kinesthetic: 0,
    });

    const handleLikertChange = (value) => {
        setSelectedValues(prevVal => ({
            ...prevVal,
            [currentIndex]: value
        }));
        // Clear any warning if the user selects a value
        setWarning(null);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cardsData.length - 1));
        setWarning(null);  // Clear any warning when navigating
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setWarning(null);  // Clear any warning when navigating
    };

    const calculateScores = () => {
        const newScores = {
            Visual: 0,
            Auditory: 0,
            Verbal: 0,
            Kinesthetic: 0,
        };

        // Calculate the score based on selected values and question type
        cardsData.forEach((card, index) => {
            const answer = selectedValues[index];
            if (answer !== undefined) {
                newScores[card.type] += parseInt(answer, 10); // Assuming values are numbers
            }
        });

        setScores(newScores);
    };

    const handleSubmit = () => {
        // Check for missed questions (those not answered)
        for (let i = 0; i < cardsData.length; i++) {
            if (selectedValues[i] === undefined) {
                // If a question is missed, navigate to that question
                setCurrentIndex(i);
                setWarning(`You missed question ${i + 1}. Please answer it before submitting.`);
                return; // Exit the function as we want to go back to the first missed question
            }
        }
        // If no questions are missed, proceed with submission
        console.log("All questions answered. Submitted values:", selectedValues);
        setWarning(null);  // Clear the warning

        calculateScores();
        setIsSubmitted(true); // Mark the test as submitted
    };

    const currentFlashcard = cardsData[currentIndex];
    const isFirstCard = currentIndex === 0;
    const isLastCard = currentIndex === cardsData.length - 1;

    if (isSubmitted) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                <div className="w-full flex flex-col items-center gap-6">
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        Test Completed! Your Scores:
                    </h2>
                    <div className="text-lg text-gray-700 dark:text-gray-200">
                        <p>Visual Learner: {scores.Visual}</p>
                        <p>Auditory Learner: {scores.Auditory}</p>
                        <p>Verbal Learner: {scores.Verbal}</p>
                        <p>Kinesthetic Learner: {scores.Kinesthetic}</p>
                    </div>
                    <button
                        onClick={() => window.location.reload()} // Reload the page to restart the quiz
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500"
                    >
                        Restart
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
            <div className="w-full flex flex-col items-center gap-6">
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Question {currentIndex + 1} / {cardsData.length}
                </div>
                {warning && (
                    <div className="text-red-600 dark:text-red-400 font-semibold">
                        {warning}
                    </div>
                )}
                <Flashcard
                    data={currentFlashcard}
                    handleChange={handleLikertChange}
                    selectedValue={selectedValues[currentIndex]}
                />
                <div className="flex gap-4">
                    {!isFirstCard && (
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500"
                        >
                            Prev
                        </button>
                    )}
                    {!isLastCard ? (
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="px-20 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
                        >
                            Finish
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlashcardContainer;
