import React from 'react';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Studies from './Studies/Studies';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Studies></Studies>
           <Blog></Blog>
           <Contact></Contact>
        </div>
    );
};

export default Home;