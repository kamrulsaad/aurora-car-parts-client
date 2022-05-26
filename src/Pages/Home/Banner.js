import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div class="hero lg:min-h-screen h-fit mt-16 lg:mt-0 bg-base-100">
            <div class="hero-content flex-col lg:flex-row gap-16">
                <img src="https://th.bing.com/th/id/R.7d5f5a3c4ae6074b4f1c97caa5911bee?rik=7XfXjT8QFiZcPA&pid=ImgRaw&r=0" alt='' class="md:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Welcome to the world of best Car Parts Manufacturer.</h1>
                    <p class="py-6">We provide the best solution for your car production. Starting from basic car parts to bare minimum tools, altogether in  your hand.</p>
                    <Link to='/allProducts' class="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;