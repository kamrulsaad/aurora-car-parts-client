import React from 'react';
import question from '../../assets/Pics/question.png'

const Blog = ({blog, index}) => {
    return (
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <img src={question} alt="" />
            </div>
            <h6 className="mb-2 font-semibold leading-5"><strong>Question-{index+1}:</strong> {blog.question}</h6>
            <p className="text-sm text-gray-900">
                <b>Answer: </b> {blog.answer}
            </p>
        </div>
    );
};

export default Blog;