import React from 'react';
import profile from '../../assets/Pics/profile.png'

const PortfolioTop = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                    <img
                        src={profile}
                        alt=""
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-accent">
                            Chill And code
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        Kamrul Huda Sattari Saad
                    </h5>
                    <p className="mb-5 text-gray-800">
                        <span className="font-bold">Email:</span> skamrul2680@gmail.com <br />
                        <span className="font-bold">Education:</span> University of Information Technology and Sciences (B.Sc. in CSE: 2021-present) <br />
                        <span className="font-bold">Skills:</span> HTML, CSS, Bootstrap, Tailwind, JavaScript, ES6, MERN Stack, Firebase, MERN Stack libraries etc. <br />
                    </p>
                    <div className="flex items-center">
                        <a href="https://drive.google.com/file/d/1ytQpKoqtz7MzH4v_csJ4o3dBAkUqy-6O/view?usp=sharing" target="_blank" rel="noopener noreferrer" ><button
                            className="btn btn-accent mr-2">
                            Checkout Resume
                        </button></a>
                        <a
                            href="https://www.linkedin.com/in/kamrul-huda-sattari-saad-8b7454225/" target='_blank' rel="noopener noreferrer" className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800">
                            Learn More
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
            </div>
        </div>
    );
};

export default PortfolioTop;