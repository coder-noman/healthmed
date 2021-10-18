import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeMedicine from '../HomeMedicine/HomeMedicine';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeMedicine></HomeMedicine>
        </div>
    );
};

export default Home;