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
                <MainTitle/>

            </section>
            <section>
                <div className="movies container">
                    <h4>hello world</h4>
                </div>
            </section>
        </>
    );
};

export default HomePage;