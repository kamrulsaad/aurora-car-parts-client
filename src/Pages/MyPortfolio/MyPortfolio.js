import React from 'react';
import PortfolioBottom from './PortfolioBottom';
import PortfolioTop from './PortfolioTop';

const MyPortfolio = () => {
    return (
        <div className="mt-16">
            <PortfolioTop></PortfolioTop>
            <PortfolioBottom></PortfolioBottom>
        </div>
    );
};

export default MyPortfolio;