import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import Tournaments from "./components/Tournaments/Tournaments";
import Games from "./components/Games/Games";
import Team from "./components/Team/Team";

function App() {
    return (
        <>
            <Header />
            <News />
            <Tournaments />
            <Games />
            <Team />
            <Footer />
        </>
    );
}

export default App;
