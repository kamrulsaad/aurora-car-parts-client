import { Link } from "react-router-dom";

const Content = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-lg sm:text-center sm:mx-auto">
          <Link 
            to='/'
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </Link>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Download our mobile app
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Get connected with us by a single tap from the object always in your pocket.
          </p>
          <hr className="my-8 border-gray-300" />
          <div className="flex items-center mb-3 sm:justify-center">
            <Link  to='/' className="mr-3 transition duration-300 hover:shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                className="object-cover object-top w-32 mx-auto"
                alt=""
              />
            </Link>
            <Link  to='/' className="transition duration-300 hover:shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                className="object-cover object-top w-32 mx-auto"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Content;