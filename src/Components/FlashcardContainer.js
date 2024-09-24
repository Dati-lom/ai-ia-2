import React, { useState } from 'react';
import Flashcard from './FlashCard';
import questionsEn from "../Data/QuestionsEn.json";
import questionsKa from "../Data/QuestionsKa.json"; // Import Georgian questions
import emailjs from 'emailjs-com';
import LanguageSwitcher from './LanguageSwitcher'; 

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
    const [language, setLanguage] = useState('en'); // Language state

    const cardsData = language === 'en' ? questionsEn.questions : questionsKa.questions;
    const translations = language === 'en' ? questionsEn : questionsKa; 

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
                setWarning(translations.errors.missingAnswer.replace("{number}", i + 1));
                return;
            }
        }

        calculateScores();
        setIsSubmitted(true);
    };

    // Find the highest scores and filter out the types that match the highest score
    const getHighestScores = () => {
        const maxScore = Math.max(...Object.values(scores));
        return Object.keys(scores).filter(type => scores[type] === maxScore);
    };

    const highestScores = getHighestScores();
    const isFirstCard = currentIndex === 0;
    const isLastCard = currentIndex === cardsData.length - 1;

    if (isSubmitted) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-secondary">
                <div className="w-full flex flex-col items-center gap-6">
                    <h2 className="text-lg font-semibold text-tetriary">
                        {translations.end.completed}
                    </h2>
                    <div className="text-lg text-tetriary">
                        {highestScores.map(type => (
                            <p key={type}>{translations.types[type]} {translations.end.mind}</p>
                        ))}
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-primary text-secondary rounded-lg font-semibold hover:bg-red-700"
                    >
                        {translations.buttons.restart}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-full flex items-center justify-center bg-secondary">
            <div className="w-full flex flex-col items-center gap-6">
                <LanguageSwitcher language={language} setLanguage={setLanguage} />
                <div className="text-lg font-semibold text-primary">
                    {translations.index.question} {currentIndex + 1} / {cardsData.length}
                </div>
                {warning && (
                    <div className="text-red-600 dark:text-red-400 font-semibold">
                        {warning}
                    </div>
                )}
                <Flashcard
                    data={cardsData[currentIndex]}
                    handleChange={handleLikertChange}
                    selectedValue={selectedValues[currentIndex]}
                    translations={translations.likert}
                />
                <div className="flex gap-4">
                    {!isFirstCard && (
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-primary text-secondary rounded-lg font-semibold hover:bg-red-700"
                        >
                            {translations.buttons.prev}
                        </button>
                    )}
                    {!isLastCard ? (
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-primary text-secondary rounded-lg font-semibold hover:bg-red-700"
                        >
                            {translations.buttons.next}
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="px-20 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-tetriary"
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
