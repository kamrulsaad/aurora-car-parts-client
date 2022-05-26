import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Blog from './Blog';

const Blogs = () => {

    const { data: blogs, isLoading } = useQuery('blogs', () => axios.get('http://localhost:5000/blogs'))

    if (isLoading) return <Loading></Loading>

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <span className="relative text-primary">Blogs</span>
                    </span>{' '}
                </h2>
            </div>
            <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.data.map((blog, index) => <Blog key={blog._id} index={index} blog={blog}></Blog>)}
            </div>
        </div>
    );
};

export default Blogs;