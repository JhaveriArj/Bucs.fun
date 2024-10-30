import React from 'react';

const NewsCard = ({ title, publisher, imageUrl, date, articleUrl }) => {
    const getTimeAgo = (dateString) => {
        const now = new Date();
        const articleDate = new Date(dateString);
        const diffTime = Math.abs(now - articleDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return '1 day ago';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
        }
        if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            return months === 1 ? '1 month ago' : `${months} months ago`;
        }
        const years = Math.floor(diffDays / 365);
        return years === 1 ? '1 year ago' : `${years} years ago`;
    };

    return (
        <div className="bg-white text-red-700 shadow-md rounded-2xl p-6 m-4 max-w-sm font-sans transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 h-[450px] flex flex-col">
            <img className="w-full h-48 object-cover rounded-xl mb-4" src={imageUrl} alt={title} />
            <h2 className="text-xl font-bold text-zinc-800 mb-2 overflow-hidden">{title}</h2>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                <p>{publisher}</p>
                <p>{getTimeAgo(date)}</p>
            </div>
            <div className="mt-auto">
                <a href={articleUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-red-700 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-red-800 transition-colors duration-300">Read More</a>
            </div>
        </div>
    );
};

export default NewsCard;
