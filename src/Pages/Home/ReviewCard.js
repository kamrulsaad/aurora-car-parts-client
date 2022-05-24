import React from 'react';
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {

    const { rating, comment, img, name, date, month, year, hours, minutes } = review;

    const firstExample = {
        size: 30,
        value: rating,
        edit: false
    };

    return (
        <div className="p-8 bg-white border rounded shadow-sm">
            <p className=" text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-800">{hours}:{minutes} on {date}/{month}/{year}</span>
            </p>
            <ReactStars {...firstExample} />
            <p className="mb-5 text-gray-700">
                {comment}
            </p>
            <div className="flex items-center gap-2">
                {
                    img ?
                        <img
                            src={img}
                            alt="avatar"
                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                        /> : <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mt-1 " viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                }
                <div>
                    <p className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        {name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;