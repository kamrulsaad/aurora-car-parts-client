import React from 'react';

const Summary = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className='text-center text-3xl font-bold mb-10'>Business Summary</h1>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary sm:w-12 sm:h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                        819K+
                    </h6>
                    <p className="mb-2 font-bold text-md">Downloads</p>
                    <p className="text-gray-700">
                        A glorious Achievement
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary sm:w-12 sm:h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                        2M+
                    </h6>
                    <p className="mb-2 font-bold text-md">Users</p>
                    <p className="text-gray-700">
                        All Satisfied members
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary sm:w-12 sm:h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">300K+</h6>
                    <p className="mb-2 font-bold text-md">Subscribers</p>
                    <p className="text-gray-700">
                        Never Old Fashioned
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary sm:w-12 sm:h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">52</h6>
                    <p className="mb-2 font-bold text-md">Products</p>
                    <p className="text-gray-700">
                        Successfull Growing Business
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Summary;