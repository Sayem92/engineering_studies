import React from 'react';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Studies from './Studies/Studies';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Studies></Studies>
           <Blog></Blog>
        </div>
    );
};

export default Home;