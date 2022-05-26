import React from 'react';
import screenshot1 from '../../assets/Screenshots/screenshot-1 (1).jpeg'
import screenshot2 from '../../assets/Screenshots/screenshot-1 (2).jpeg'
import screenshot3 from '../../assets/Screenshots/screenshot-1 (3).jpeg'
import screenshot4 from '../../assets/Screenshots/screenshot-1 (4).jpeg'

const PortfolioBottom = () => {
    return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4">
                            My Projects
                        </span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                    <p className="text-gray-700 lg:text-sm lg:max-w-md">
                        "The following are the best projects I have worked on till now from the starting of my journey to become a successfull Web Developer."
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    <a href="https://marvelous-toy-store.web.app/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={screenshot4}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">Marvelous-toy-store</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    This was the first most highly dynamic website created by me before aurora-car-parts.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://kamrulsaad.github.io/SunnySide-Agency-Landing-page-2/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={screenshot2}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    SUnny-Side Agency Landing Page
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    A Simple Static Landing Page, with the design from frontend mentor.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://smart-photography-provider.web.app/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={screenshot3}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">Saad-photography</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                   A simple single-service provider application built with react and firebase.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://doctors-portal-by-saad.web.app/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={screenshot1}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    Doctors Portal
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Almost the same as aurora car parts, the website was build following the tutorials from Programming Hero Web Course.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="text-center">
                    <a
                        href="https://github.com/kamrulsaad"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
                    >
                        View more in GitHub
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>
            </div>
        );
    };

export default PortfolioBottom;