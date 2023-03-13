import React from 'react';
import css from './App.module.scss';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const App = () => {
    return (
        <div className={css.app}>
            <Header/>
            <Content/>
        </div>
    );
};

export default App;
