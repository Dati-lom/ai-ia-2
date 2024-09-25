import React, { useEffect, useState } from 'react';
import Flashcard from './FlashCard';
import questionsEn from "../Data/QuestionsEn.json";
import questionsKa from "../Data/QuestionsKa.json"; // Import Georgian questions
import emailjs from 'emailjs-com';

const imgSource = {
    Visual: "https://i.postimg.cc/KYcZkVKb/Visual-data-pana.png",
    Auditory: "https://i.postimg.cc/d06zbVVP/Audiobook-bro.png",
    Verbal: "https://i.postimg.cc/nzL6pfXs/Bibliophile-amico.png",
    Kinesthetic: "https://i.postimg.cc/vH98p5RJ/Kids-playing-with-car-toys-bro.png"
};

const FlashcardContainer = ({ language, setLanguage }) => {
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
    const [cardsData, setCardsData] = useState(questionsEn.questions);
    const [translations, setTranslations] = useState(questionsEn);

    useEffect(() => {
        setCardsData(language === 'en' ? questionsEn.questions : questionsKa.questions);
        setTranslations(language === 'en' ? questionsEn : questionsKa);
    }, [language]);

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
        emailjs.send('service_9pcguwq', 'template_hre42w5', {
            to_name: 'AIIA',
            from_name: 'AIIA',
            message: 'Here are the scores from the learning style assessment.'
        }, 'Xkh4Njd3bXlpxURCE')
            .then(response => {
                console.log('Success:', response);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setIsSubmitted(true);
    };

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
                            <div key={type} className="flex flex-col items-center">
                                <p>{translations.types[type]} {translations.end.mind}</p>
                                {/* Display the corresponding image */}
                                <img
                                    src={imgSource[type]}
                                    alt={`${type} learner`}
                                    className="w-40 h-40 mt-4"
                                />
                            </div>
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
                <div className="text-lg font-semibold text-primary mt-8">
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
