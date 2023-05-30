import React from 'react';
import MainTitle from "../../components/main-title";
import Header from "../../components/header";

const HomePage = () => {

    //
    // console.log(movies)


    return (
        <>
            <section className={'main-section'}>
                <Header/>
                <div className="container">
                    <MainTitle/>
                </div>
            </section>
        </>
    );
};

export default HomePage;