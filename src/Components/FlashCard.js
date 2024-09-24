import React from 'react';
import "../Tailwind.css";

const Flashcard = ({ data, handleChange, selectedValue }) => {
    return (
        <article className="w-3/4 rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 p-4">
            <div>
                {/* <img
                    className="object-none h-64 w-full"
                    src="https://i.postimg.cc/PqR697kQ/0db08a63-0aaa-46bd-bb92-724123862b9f.jpg"
                    alt={data.question}
                /> */}
            </div>

            <div className="flex flex-col gap-1 mb-10 mt-10 px-4 bg-clip-padding">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">{data.question}</h2>
            </div>

            {/* Likert Scale - 5 fixed options */}
            <div className="flex gap-10 mb-10">
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center w-full h-full p-2 cursor-pointer" onClick={() => handleChange(1)}>
                            <label className="relative flex items-center cursor-pointer" htmlFor="strongly-disagree">
                                <input
                                    name="likert"
                                    type="radio"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-red-600 transition-all"
                                    id="strongly-disagree"
                                    value={1}
                                    checked={selectedValue === 1}
                                    onChange={() => handleChange(1)}
                                />
                                <span className="absolute bg-red-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>
                            <span className="ml-2">Strongly Disagree</span>
                        </div>
                    </li>

                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center w-full h-full p-2 cursor-pointer" onClick={() => handleChange(2)}>
                            <label className="relative flex items-center cursor-pointer" htmlFor="disagree">
                                <input
                                    name="likert"
                                    type="radio"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-blue-600 transition-all"
                                    id="disagree"
                                    value={2}
                                    checked={selectedValue === 2}
                                    onChange={() => handleChange(2)}
                                />
                                <span className="absolute bg-blue-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>
                            <span className="ml-2">Disagree</span>
                        </div>
                    </li>

                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center w-full h-full p-2 cursor-pointer" onClick={() => handleChange(3)}>
                            <label className="relative flex items-center cursor-pointer" htmlFor="neutral">
                                <input
                                    name="likert"
                                    type="radio"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-amber-600 transition-all"
                                    id="neutral"
                                    value={3}
                                    checked={selectedValue === 3}
                                    onChange={() => handleChange(3)}
                                />
                                <span className="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>
                            <span className="ml-2">Neither Agree nor Disagree</span>
                        </div>
                    </li>

                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center w-full h-full p-2 cursor-pointer" onClick={() => handleChange(4)}>
                            <label className="relative flex items-center cursor-pointer" htmlFor="agree">
                                <input
                                    name="likert"
                                    type="radio"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-purple-600 transition-all"
                                    id="agree"
                                    value={4}
                                    checked={selectedValue === 4}
                                    onChange={() => handleChange(4)}
                                />
                                <span className="absolute bg-purple-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>
                            <span className="ml-2">Agree</span>
                        </div>
                    </li>

                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center w-full h-full p-2 cursor-pointer" onClick={() => handleChange(5)}>
                            <label className="relative flex items-center cursor-pointer" htmlFor="strongly-agree">
                                <input
                                    name="likert"
                                    type="radio"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-green-600 transition-all"
                                    id="strongly-agree"
                                    value={5}
                                    checked={selectedValue === 5}
                                    onChange={() => handleChange(5)}
                                />
                                <span className="absolute bg-green-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>
                            <span className="ml-2">Strongly Agree</span>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default Flashcard;
