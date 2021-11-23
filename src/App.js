import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Sentiment from "./pages/Sentiment/Sentiment";
import Entity from "./pages/Entity/Entity";
import Phrase from "./pages/Phrase/Phrase";
import Language from "./pages/Language/Language";
import Terminal from "./components/UI/Terminal";
import Home from "./pages/Home/Home";
import Folder from './assets/img/icons8-mac-folder-96.png'
import MenuBar from "./components/UI/MenuBar";

function App() {


    return (
        <Router>
            <div className="container">
                <div className="folders">
                    <div className="folder">
                        <img src={Folder} alt=""/>
                        <p>React Projects</p>
                    </div>
                    <div className="folder">
                        <img src={Folder} alt=""/>
                        <p>AI Projects</p>
                    </div>
                    <div className="folder">
                        <img src={Folder} alt=""/>
                        <p>Cool Projects</p>
                    </div>
                    <div className="folder">
                        <img src={Folder} alt=""/>
                        <p>Videos</p>
                    </div>
                </div>
                <Terminal>
                    <Routes>
                        <Route path={`/`} element={<Home/>}/>
                        <Route path={`/sentiment`} element={<Sentiment/>}/>
                        <Route path={`/entity`} element={<Entity/>}/>
                        <Route path={`/phrase`} element={<Phrase/>}/>
                        <Route path={`/language`} element={<Language/>}/>
                    </Routes>
                </Terminal>
                <MenuBar/>
            </div>
        </Router>
    );
}

export default App;
