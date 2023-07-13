import React from 'react';
import {Header} from "./modules/header/Header";
import {Card} from "./modules/card/Card";
import {CardType} from "./constans/CardType";
import {ButtonCard} from "./modules/buttonCard/ButtonCard";
import {Footer} from "./modules/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="cards-container">
                <Card type={CardType.Person}/>
                <Card type={CardType.Vehicle}/>
                <div className="button-cards-container">
                    <ButtonCard swap={false}/>
                    <ButtonCard swap={true}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
