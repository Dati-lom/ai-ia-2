import React from 'react';
import "../Tailwind.css"

const options = [
    { color: 'red', label: 'Strongly Disagree', val: 1 },
    { color: 'blue', label: 'Disagree', val: 2 },
    { color: 'amber', label: 'Neither agree nor Disagree', val: 3 },
    { color: 'purple', label: 'Agree', val: 4 },
    { color: 'green', label: 'Strongly Agree', val: 5 },
];

const Flashcard = ({ data, handleChange, selectedValue }) => {
    const handleListItemClick = (val) => {
        handleChange(val);
    };
    
    return (
        <article className="w-3/4 rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 p-4">
            <div>
                <img
                    className="object-cover h-64 w-full"
                    src ={data.img}
                    alt={data.question}
                />
            </div>

            <div className="flex flex-col gap-1 mb-10 mt-10 px-4 bg-clip-padding">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">{data.question}</h2>
            </div>

            {/* Likert Scale */}
            <div className="flex gap-10 mb-10">
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {options.map(({ color, label, val }) => (
                        <li key={color} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div 
                                className="flex items-center w-full h-full p-2 cursor-pointer"
                                onClick={() => handleListItemClick(val)}
                            >
                                <label className="relative flex items-center cursor-pointer" htmlFor={`${color}-${val}`}>
                                    <input
                                        name="likert"
                                        type="radio"
                                        className={`peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-${color}-400 transition-all`}
                                        id={`${color}-${val}`}
                                        value={val}
                                        checked={selectedValue === val}
                                        onChange={() => handleListItemClick(val)}
                                    />
                                    <span className={`absolute bg-${color}-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></span>
                                </label>
                                <span className="ml-2">{label}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Flashcard;