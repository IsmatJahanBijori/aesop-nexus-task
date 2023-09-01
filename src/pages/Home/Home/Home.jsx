import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../../../components/Footer/Footer';


const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Banner/>
            <Footer/>
        </React.Fragment>
    );
};

export default Home;