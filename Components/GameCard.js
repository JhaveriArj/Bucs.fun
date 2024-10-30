import React from 'react';

const GameCard = ({ homeTeam, awayTeam, date, time, result, stadium, location }) => {
    return (
        <div className="bg-white text-red-700 shadow-md rounded-2xl p-6 m-4 max-w-sm font-sans transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 flex flex-col items-center">
            <div className="flex justify-center items-center mb-4">
                <div className="text-2xl font-bold text-zinc-800">{homeTeam}</div>
                <div className="text-xl font-light mx-2 text-gray-600">vs</div>
                <div className="text-2xl font-bold text-zinc-800">{awayTeam}</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 mt-4 text-center w-full">
                <p className="text-md font-medium text-gray-600">{date}</p>
                <p className="text-xl font-bold mt-2 text-zinc-800">{time}</p>
                <p className="text-xl mt-3 font-semibold text-red-700">{result}</p>
                <p className="text-sm mt-2 text-gray-500">{stadium}, {location}</p>
            </div>
            <div className="mt-4 w-full">
                <button className="w-full bg-red-700 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-red-800 transition-colors duration-300">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default GameCard;
