import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../../../components/Footer/Footer';
import Queots from '../Queots/Queots';
import Body from '../Body/Body';
import Skin from '../Skin/Skin';
import WarmUp from '../WarmUp/WarmUp';


const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Banner/>
            <Body/>
            <Skin/>
            <WarmUp/>
            <Queots/>
            <Footer/>
        </React.Fragment>
    );
};

export default Home;