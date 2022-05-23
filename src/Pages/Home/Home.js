import React from 'react';
import Banner from './Banner';
import Content from './Content';
import Features from './Features';
import Manufacturing from './Manufacturing';
import Parts from './Parts';
import Summary from './Summary';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Manufacturing></Manufacturing>
            <Features></Features>
            <Testimonials></Testimonials>
            <Content></Content>
        </div>
    );
};

export default Home;