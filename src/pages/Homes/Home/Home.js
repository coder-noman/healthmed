import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeDoctor from '../HomeDoctor/HomeDoctor';
import HomeMedicine from '../HomeMedicine/HomeMedicine';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeMedicine></HomeMedicine>
            <HomeDoctor></HomeDoctor>
        </div>
    );
};

export default Home;