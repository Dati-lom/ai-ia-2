import React, { useState } from 'react';
import Flashcard from './FlashCard';
import questionsEn from "../Data/QuestionsEn.json";
import questionsKa from "../Data/QuestionsKa.json"; // Import the Georgian questions
import emailjs from 'emailjs-com';

const FlashcardContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedValues, setSelectedValues] = useState({});
    const [warning, setWarning] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [scores, setScores] = useState({
        Visual: 0,
        Auditory: 0,
        Verbal: 0,
        Kinesthetic: 0,
    });
    const [language, setLanguage] = useState('en'); // State for current language

    // Determine the current questions based on the selected language
    const cardsData = language === 'en' ? questionsEn.questions : questionsKa.questions;
    const translations = language === 'en' ? questionsEn : questionsKa; // Get button and error translations

    const handleLikertChange = (value) => {
        setSelectedValues(prevVal => ({
            ...prevVal,
            [currentIndex]: value
        }));
        setWarning(null);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cardsData.length - 1));
        setWarning(null);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setWarning(null);
    };

    const calculateScores = () => {
        const newScores = {
            Visual: 0,
            Auditory: 0,
            Verbal: 0,
            Kinesthetic: 0,
        };

        cardsData.forEach((card, index) => {
            const answer = selectedValues[index];
            if (answer !== undefined) {
                newScores[card.type] += parseInt(answer, 10);
            }
        });

        setScores(newScores);
    };

    const handleSubmit = () => {
        for (let i = 0; i < cardsData.length; i++) {
            if (selectedValues[i] === undefined) {
                setCurrentIndex(i);
                setWarning(translations.errors.missingAnswer.replace("{number}", i + 1)); // Use translation for error message
                return;
            }
        }

        calculateScores();
        setIsSubmitted(true);
        // Email sending logic...
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
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500"
                    >
                        {translations.buttons.restart}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
            <div className="w-full flex flex-col items-center gap-6">
                <div className="flex items-center">
                    <button onClick={() => setLanguage('en')} className={`px-4 py-2 ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                        English
                    </button>
                    <button onClick={() => setLanguage('ka')} className={`px-4 py-2 ${language === 'ka' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                        ქართული
                    </button>
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {translations.index.question} {currentIndex + 1} / {cardsData.length}
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
                    translations={translations.likert} // Pass translations for Likert scale
                />
                <div className="flex gap-4">
                    {!isFirstCard && (
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500"
                        >
                            {translations.buttons.prev}
                        </button>
                    )}
                    {!isLastCard ? (
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500"
                        >
                            {translations.buttons.next}
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="px-20 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
                        >
                            {translations.buttons.finish}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlashcardContainer;
